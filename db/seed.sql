CREATE TABLE animal(
    id SERIAL PRIMARY KEY,
    name TEXT,
    price INTEGER
);

CREATE TABLE animaluser(
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);