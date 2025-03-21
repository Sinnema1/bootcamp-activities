-- Write your Schema Here -- 
\c postgres;
DROP DATABASE IF EXISTS customers_db;
CREATE DATABASE customers_db;

\c activity16_db;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30)
);

CREATE TABLE customer_orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    order_details TEXT,
    FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);