# Express TypeScript API

Simple backend API using Express.js, TypeScript, dotenv, and Router.

---

## Tech Stack

* Node.js
* Express.js
* TypeScript
* dotenv

---

## Installation

### Clone the Project

```bash
git clone <your-repository-url>
cd <project-folder>
```

### Initialize Project

```bash
npm init -y
```

### Install Dependencies

```bash
npm install express @types/express dotenv router
```

### Install TypeScript Runner

```bash
npm install tsx
```

---

## Run the Project

```bash
npx tsx src/server.ts
```

---

## Project Structure

```plaintext
project-folder/
│── src/
│   ├── routes/
│   ├── controllers/
│   ├── server.ts
│── .env
│── package.json
│── tsconfig.json
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=3000
```

---

## Example Server

```ts
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
