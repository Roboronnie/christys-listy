CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    student VARCHAR (255) NOT NULL
);

CREATE TABLE company (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL
);

CREATE TABLE representatives (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    company_id INT REFERENCES company
);