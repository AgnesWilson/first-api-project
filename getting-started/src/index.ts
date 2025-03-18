import express, { Request, Response } from 'express';
const app = express();

import { todos } from './modules/ToDos';
import { posts } from './modules/Posts';

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});

// ------------------ START PAGE --------------------- //
app.get('/', (_: Request, res: Response) => {
    res.send('Starting Page')
  })

// -------------------- TO DO ----------------------- //
app.get('/todos', (req: Request, res: Response) => {
    res.json(todos)
})

// -------------------- POSTS ----------------------- //
app.get('/posts', (req: Request, res: Response) => {
    const search = req.query.search

    let filterByAuthor = posts;

    if (search) {
        filterByAuthor = filterByAuthor.filter((post) => post.author.includes(search.toString()))
    }

    res.json(filterByAuthor)
})