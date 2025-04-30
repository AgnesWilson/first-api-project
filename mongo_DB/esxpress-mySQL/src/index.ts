import 'dotenv/config'
import express from 'express';
import cors from 'cors'

import postRouting from './routes/postRouting';
import commentsRouting from './routes/commentsRouting'
import mongoose from 'mongoose';

const app = express();

// Middleware - gäller för alla requests
app.use(express.json()) // Hanterar omvandling från json till js/ts så att vi kan hantera det
app.use(cors());

//Routing 
app.use('/posts', postRouting)
app.use('/comments', commentsRouting)

// Connect To DB
mongoose.connect() // Här ska jag fortsätta 
const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});

//  Syntax för att söka :) 
//  http://localhost:3000/posts?filter=Wilson
//  http://localhost:3000/posts?sort=asc