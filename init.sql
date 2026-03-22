CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO users (name, email)
SELECT
  'User ' || i,
  'user' || i || '@mock.com'
FROM generate_series(1, 10000) i;