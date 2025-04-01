import 'dotenv/config'
import express from 'express';
import cors from 'cors'

import { connectToDatabase } from './config/db';

import routing from './routes/postRouting'

const app = express();

// Middleware - gäller för alla requests
app.use(express.json()) // Hanterar omvandling från json till js/ts så att vi kan hantera det
app.use(cors());

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