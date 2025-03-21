DROP DATABASE IF EXISTS cinema_db;
CREATE DATABASE cinema_db;

\c cinema_db;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  movie_name VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  movie_id INTEGER,
  review TEXT,

  FOREIGN KEY (movie_id)
  REFERENCES movies(id)
  ON DELETE SET NULL
);
