-- seed.sql
INSERT INTO users (username, email, password) VALUES ('Aureliano', 'aurelianobuendia@columbia.co', '1234567890');
INSERT INTO users (username, email, password) VALUES ('Jose Arcadio', 'josearcadiobuendia@columbia.co', 'azertyuiop');

INSERT INTO posts (title, content, user_id) VALUES ('Título del primer post', 'Este libro es realmente impresionante.Es un fresco de la sociedad colombiana del siglo XIX.', 1);
INSERT INTO posts (title, content, user_id) VALUES ('Título del segundo post', 'Este libro no describe nuestra vida exactamente lo he vivido.', 2);

INSERT INTO comments (content, user_id, post_id) VALUES ('¡Es un comentario interesante!', 1, 1);
INSERT INTO comments (content, user_id, post_id) VALUES ('tengo una pregunta en tu post.', 2, 2);

INSERT INTO likes (user_id, post_id) VALUES (1, 1);
INSERT INTO likes (user_id, post_id) VALUES (2, 2);
