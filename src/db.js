//Old database code replaced with Prisma ORM, kept for reference

import {DatabaseSync} from 'node:sqlite'

const db = new DatabaseSync(':memory:')

//make tables in sql for todo app, users and todos
db.exec(`
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    );

`);

db.exec(`
    CREATE TABLE IF NOT EXISTS todos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        task TEXT,
        completed BOOLEAN DEFAULT 0,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
`);

export default db;

