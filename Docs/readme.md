# Appointment & Customer Management Mobile App

A robust, offline-first mobile application with **React Native (Expo)** and **TypeScript**. It features a local **SQLite** cache that syncs with a **FastAPI** backend backed by a local **PostgreSQL** database.


[ Mobile App (React Native/Expo) ]
|
▼ (Offline-First Layer)
[ SQLite Local Cache ]
|
▼ (Network Sync via API)
[ FastAPI Backend API ]
|
▼ (Persistent Storage)
[ PostgreSQL Local DataBase ]

---

## Tech Stack

 **Mobile:** React Native, Expo, Typescript

 **State & Navigation:** ReactNavigation

 **Local Cache:** SQLite

 **Backend API:** FastAPI

 **Main Database:** PostgreSQL (Local)
 
 **Utilities:** `date-fns` (Date manipulation), Expo Vector Icons

---

## Folder Structure
 
```text
src/
   Screens/                 # Application Screen Components (.tsx)
    Dashboard.tsx           # Overview metrics and quick actions
    Calender.tsx            # Visual appointment schedule layouts
    Customers.tsx           # Customer database CRUD views
    Booking.tsx             # Appointment booking wizard
    Services.tsx            # Service catalog management
    Settings.tsx            # App preferences and sync controls

   Components/              # Reusable UI elements

   Navigation/              # Routing & Tab configurations
    AppNavigator.tsx        # Main React Navigation setup

   Database/                # SQLite local storage abstraction (.ts)
    schema.ts               # Local table structural definitions
    queries.ts              # Local CRUD execution scripts
    migration.ts            # Database versioning and update scripts

   Hooks/                   # Custom reusable React hooks
   Utils/                   # Shared helper and formatting functions
   Types/                   # TypeScript type definitions and interfaces
```

---

## Database Schema (Relational Model)

 ### 1. Customers
   
   |   Field   |     Type     |            Description               |
   |   :----   |     :---     |            :----------               |
   | `id`(pk)  | Integer/UUID | Unique customer identifier           |
   | `name`    |    String    | Full name of client                  |
   | `phone`   |    String    | Contact number for updates/reminders |
   | `notes`   |    String    | Client preferences or history        |

 ### 2. Services

   |   Field   |     Type     |            Description               |
   |   :----   |     :---     |            :----------               |
   |`id` (PK) | Integer / UUID | Unique service identifier |
   |`name` | String | Name of the service |
   | `price` | Decimal / Float | Cost of the service |
   | `duration` | Integer | Length of service in minutes |

 ### 3. Appointments
   |    Field    |     Type     |            Description               |
   |    :----    |     :---     |            :----------               |
   | `id`(PK)    | Integer / UUID | Unique service identifier |
   | `customerId`(FK) | Integer / UUID | References `Customers.id` |
   | `serviceId` (FK) | Integer / UUID | References `Services.id` |
   | `date`      | String / Date | Scheduled date (YYYY-MM-DD) |
   | `time`      | String / Time | Scheduled time (HH:MM) |
   | `status`    | String | Current status (`Pending`, `Completed`, `Cancelled`) |
   | `notes`     | String (Optional) | Specific appointment notes |

---

## Key Application Features

### DashBoard Screen
 - **Today's Appointments:** Quick view of the immediate daily schedule.
 - **Upcoming Appointments:** Chronological list of future bookings.
 - **Completed Today:** Instant tally of successfully finalized sessions.

### Customers Management Screen
 - **Add Customer:** Onboard new clients with contact records.
 - **Edit Customer:** Keep client profiles up to date.
 - **Delete Customer:** Remove inactive profiles safely.
 - **Search Customer:** Real-time filtered text querying.
 - **Customer History:** Timeline of previous bookings and notes.

### Appointments & Calender Screen
 - **Create Booking:** Fluid scheduler linked to customers and services.
 - **Reschedule:** Quick adjustments to date/time entries.
 - **Cancel/Complete:** Single-tap pipeline status management toggles.
 - **View Calender:** Visual timeline view of monthly/weekly loads.
 - **Daily Schedule APP:** Segmented day-by-day hourly agenda layout.