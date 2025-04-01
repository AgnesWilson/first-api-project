import 'dotenv/config'
import express from 'express';
import cors from 'cors'

import routing from './routes/postRouting'

const app = express();

// Middleware - gäller för alla requests
app.use(express.json()) // Hanterar omvandling från json till js/ts så att vi kan hantera det
app.use(cors());

import mysql from 'mysql2/promise';
// Create the connection pool. The pool-specific settings are the defaults
const db = mysql.createPool({
    host:     process.env.DB_HOST || "",
    user:     process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "",
    port:     parseInt(process.env.DB_PORT || "3306") 
  });

  const connectToDatabase = async () => {
    try {
      await db.getConnection();
      console.log('Connected to DB')
    } catch (error: unknown) {
      console.log('Error connecting to DB: ' + error)
    }
  }

//Routing 
app.use('/posts', routing)

// Connect To DB
connectToDatabase();
const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});

//  Syntax för att söka :) 
//  http://localhost:3000/posts?filter=Wilson
//  http://localhost:3000/posts?sort=asc