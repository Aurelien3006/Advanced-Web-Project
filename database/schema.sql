-- users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(100)
);

-- posts table
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- comments table
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  content TEXT,
  user_id INTEGER,
  post_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (post_id) REFERENCES posts(id)
);

-- likes table
CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  post_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (post_id) REFERENCES posts(id)
);