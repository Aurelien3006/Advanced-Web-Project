const express = require('express');
const path = require('path');

// Import the function someExportedFunction from functions.js
const ExportedFunction = require('./functions');

const app = express();
const knex = require('knex');
const PORT = process.env.PORT || 3000;

// Serve static files inside the 'public' directory
app.use('/', express.static(path.join(__dirname, 'public')));

// Dynamic endpoint
app.get('/api/:id', (req, res) => {
  const id = req.params.id;
  const response = {
    // message is the text printed on the page after a click on either button 1 or 2
    message: `ID ${id}`,
    data: ExportedFunction(id)
  };
  res.json(response);
});



app.post('/api/create', async (req, res) => {
  const { param1, param2, param3, param4 } = req.body;

  knex('users')
    .insert({ id: param1, username: param2, email: param3, password: param4})
    .returning('*') // This is to return the newly-inserted record
    .then(data => {
      res.json(data); // Send the newly-created record as a JSON response
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

app.get('/api/retrieve/:param', async (req, res) => {
  const { param } = req.params; // Extract parameter from URL

  knex('users')
    .where('username', 'like', `%${param}%`)
    .then(data => {
      res.json(data); // Send the retrieved records as a JSON response
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

app.put('/api/update/:id', async (req, res) => {
  const { id } = req.params; // Extract ID from URL
  const { param1, param2, param3, param4 } = req.body; // Extract parameters from request body

  knex('users')
    .where({ id })
    .update({ id: param1, username: param2, email: param3, password: param4})
    .then(() => {
      res.json({ success: true }); // Send a success response as JSON
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

app.delete('/api/delete/:id', async (req, res) => {
  const { id } = req.params; // Extract ID from URL

  knex('users')
    .where({ id })
    .del()
    .then(() => {
      res.json({ success: true }); // Send a success response as JSON
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Start the server on port 3000
app.listen(PORT, () => {
  console.log(`Server started successfully on http://localhost:${PORT}`);
});