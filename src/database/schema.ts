import { db } from "./database";

export function initializeDatabase() {
    db.execSync(`
        CREATE TABLE IF NOT EXISTS customers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL
        );

        
    `
        // CREATE TABLE IF NOT EXISTS appointments (
        //     id INTEGER PRIMARY KEY AUTOINCREMENT,
        //     customer_id,
        //     service
        //     date,
        //     time,
        //     duration,
        //     price,
        //     status
        // );
    );
}