import express, { Request, Response } from 'express';
import { fetchAllPosts, searhPostsById, createPost, editPost, deletePost } from './controller/postsController';

const app = express();

// Middleware - gäller för alla requests
app.use(express.json()) // Hanterar omvandling från json till js/ts så att vi kan hantera det

app.get('/posts', fetchAllPosts)
app.get('/posts/:id', searhPostsById)
// ------- LEKTION NUMMER TVÅ ------- //
app.post('/posts', createPost)
app.patch('/posts/:id', editPost)
app.delete('/posts/:id', deletePost)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});

//  Syntax för att söka :) 
//  http://localhost:3000/posts?filter=Wilson
//  http://localhost:3000/posts?sort=asc