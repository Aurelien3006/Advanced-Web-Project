const express = require('express');
const path = require('path');

// Import the function someExportedFunction from functions.js
const ExportedFunction = require('./functions');

const app = express();
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

// Start the server on port 3000
app.listen(PORT, () => {
  console.log(`Server started successfully on http://localhost:${PORT}`);
});