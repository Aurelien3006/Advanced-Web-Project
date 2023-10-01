-- queries.sql

-- Query 1: Select all users
SELECT * FROM users;

-- Query 2: Select posts with their comments
SELECT posts.title AS title, posts.content AS content, comments.content AS comment 
FROM posts
JOIN comments ON posts.id = comments.post_id;

-- Query 3: Select posts with likes count
SELECT posts.title, COUNT(likes.id) AS likes_count
FROM posts
LEFT JOIN likes ON posts.id = likes.post_id
GROUP BY posts.title;

-- Query 4: Select user's posts and their comments
SELECT users.username, posts.title, comments.content AS comment
FROM users
JOIN posts ON users.id = posts.user_id
JOIN comments ON posts.id = comments.post_id
WHERE users.id = 1;