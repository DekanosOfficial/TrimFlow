import { db } from "./database";

export function initializeDatabase() {
    // Create database tables
    db.execSync(`
        CREATE TABLE IF NOT EXISTS customers (

            -- Customer identifier
            id INTEGER PRIMARY KEY AUTOINCREMENT,

            name TEXT NOT NULL,
            phone TEXT NOT NULL
        );
        
        -- Stores each appointment made for a customer
        CREATE TABLE IF NOT EXISTS appointments (
            
            -- Unique appointment identifier
            id INTEGER PRIMARY KEY AUTOINCREMENT,

            -- Connects the appointment to the customer
            customer_id INTEGER NOT NULL,

            -- The service customer booked 
            service TEXT NOT NULL,

            -- Date and Time of appointment (Text for now)
            date TEXT NOT NULL,
            time TEXT NOT NULL,

            -- Duration stored in minutes
            duration INTEGER NOT NULL,


            price REAL NOT NULL,
            
            -- Example: booked, completed, cancelled
            status TEXT NOT NULL,

            -- Creates the relationship between two tables
            FOREIGN KEY(customer_id)
                REFERENCES customers(id)
        );   
    `
    );
}