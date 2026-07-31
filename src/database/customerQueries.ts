import { db } from "./database";

export interface Customer {
    id: number;
    name: string;
    phone: string;
}

export function getCustomers(): Customer[] {
    return db.getAllSync<Customer>(
        "SELECT * FROM customers ORDER BY name ASC;"
    );
}

export function addCustomer(
    name: string, 
    phone: string
): void {
    db.runSync(
        "INSERT INTO customers (name, phone) VALUES (?, ?);",
        [name, phone]
    );
}

export function updateCustomer(
    id: number,
    name: string,
    phone: string
): void {
    db.runSync(
        "UPDATE customers SET name = ?, phone = ? WHERE id = ?;",
        [name, phone, id]
   );
}

export function deleteCustomer(id: number) {
    db.runSync(
        "DELETE FROM customers WHERE id = ?;",
        [id]
    );
}