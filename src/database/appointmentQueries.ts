import { db } from "./database";

export interface Appointment {
    id: number;
    customer_id: number;
    service: string;
    date: string;
    time: string;
    duration: number;
    price: number;
    status: string;
}

export function getAppointments(): Appointment[] {
    return db.getAllSync<Appointment>(
        "SELECT * FROM appointments ORDER BY date, time;"
    );
}

export function addAppointment(
    customer_id: number,
    service: string,
    date: string,
    time: string,
    duration: number,
    price: number,
    status: string,
): void {
    db.runSync(
        // Inserts a new appointment into database
        "INSERT INTO appointments (customer_id, service, date, time, duration, price, status) VALUES (?, ?, ?, ?, ?, ?, ?);",
        [customer_id, service, date, time, duration, price, status]
    );
}


export function updateAppointment(
    id: number,
    service: string,
    date: string,
    time: string,
    duration: number,
    price: number,
    status: string,
): void {
    // Updates one specific appointment
    db.runSync(
        "UPDATE appointments set service = ?, date = ?, time = ?, duration = ?, price = ?, status = ? WHERE id = ?;",
        [service, date, time, duration, price, status, id]
    );
}

export function deleteAppointment(id: number) {
    // Deletes one specific appointment
    db.runSync(
        "DELETE FROM appointments WHERE id = ?;",
        [id]
    );
}