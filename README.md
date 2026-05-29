# Express TypeScript MySQL API

Backend API using Express.js, TypeScript, MySQL, Singleton Database Pattern, Repository-Service-Controller Architecture, and bcrypt authentication.

---

# Tech Stack

* Node.js
* Express.js
* TypeScript
* MySQL
* mysql2
* bcrypt
* dotenv

---

# Installed Packages

## Dependencies

```bash
npm install express dotenv mysql2 bcrypt
```

## Dev Dependencies

```bash
npm install -D typescript tsx @types/node @types/express @types/bcrypt
```

---

# Package Versions

```bash
@types/bcrypt@6.0.0
@types/express@5.0.6
@types/node@25.9.1
bcrypt@6.0.0
dotenv@17.4.2
express@5.2.1
mysql2@3.22.4
tsx@4.22.3
typescript@5.9.3
```

---

# Features

* RESTful API
* CRUD Operations
* MySQL Connection Pool
* Singleton Database Pattern
* Repository Pattern
* Service Layer
* Base Controller
* Password Hashing with bcrypt
* Environment Variables

---

# Installation

## Clone Project

```bash
git clone <repository-url>
cd <project-folder>
```

---

# Initialize Project

```bash
npm init -y
```

---

# Install Dependencies

```bash
npm install express dotenv mysql2 bcrypt
```

---

# Install Dev Dependencies

```bash
npm install -D typescript tsx @types/node @types/express @types/bcrypt
```

---

# Environment Variables

Create a `.env` file:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=1234
DB_NAME=test_db
```

---

# Run Project

```bash
npx tsx src/server.ts
```

---

# API Endpoints

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| POST   | `/users`     | Create User    |
| GET    | `/users`     | Get All Users  |
| GET    | `/users/:id` | Get User By ID |
| PUT    | `/users/:id` | Update User    |
| DELETE | `/users/:id` | Delete User    |

---

# Example Server

```ts
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("API is running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

# Architecture

```plaintext
Routes
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
Database
```

---

# Author

Tola Tim
