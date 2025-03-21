import express from 'express';
import routing from './routes/postRouting'

const app = express();

// Middleware - gäller för alla requests
app.use(express.json()) // Hanterar omvandling från json till js/ts så att vi kan hantera det

//Routing 
app.use('/posts', routing)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});

//  Syntax för att söka :) 
//  http://localhost:3000/posts?filter=Wilson
//  http://localhost:3000/posts?sort=asc