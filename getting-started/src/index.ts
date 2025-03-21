import express, { Request, Response } from 'express';
const app = express();

import { todos } from './modules/ToDos';
import { posts, Post } from './modules/Posts';

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});

// ------------------ START PAGE --------------------- //
app.get('/', (_: Request, res: Response) => {
    res.send('Starting Page')
  })

// --------------------- TO DO ------------------------ //
app.get('/todos', (req: Request, res: Response) => {
    res.json(todos)
})

// --------------- POSTS - SORT/FILTER ----------------- //
app.get('/posts', (req: Request, res: Response) => {
    let filteredPosts = posts;

    // ***** Filterra på författare ***** //
    const filter = req.query.filter
    if (filter) {
        filteredPosts = filteredPosts.filter((post) => post.author.includes(filter.toString()))
    }

    // *** Sortera på titel i bokstavsordning A-Ö *** //
    const sortByTitle = req.query.sort

    if (sortByTitle && sortByTitle === "asc") {
        filteredPosts = filteredPosts.sort((a, b) => {
            const postOne = a.title.toLowerCase()
            const postTwo = b.title.toLowerCase()

            if (postOne > postTwo) return 1
            if (postOne < postTwo) return -1
            return 0
        })
    }

    // *** Sortera på titel i bokstavsordning Ö-A *** //
    if (sortByTitle && sortByTitle === "desc") {
        filteredPosts = filteredPosts.sort((a, b) => {
            const postOne = a.title.toLowerCase()
            const postTwo = b.title.toLowerCase()

            if (postOne < postTwo) return 1
            if (postOne > postTwo) return -1
            return 0
        })
    }
    res.json(filteredPosts)
})

// ----------------- POSTS - SORT:id -------------------- //
app.get('/posts/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const post = posts.find((posted) => posted.id === parseInt(id))

    res.json({post})

})

// ------------------------------------------------------------- //
// -------------------- LEKTION NUMMER TVÅ --------------------- //
// ------------------------------------------------------------- //

//gäller för alla requests
app.use(express.json()) // "Middleware" Hanterar omvandling från json till js/ts så att vi kan hantera det

// ------------- ADD/POST NEW POST EXTERNALLY ---------------- //
app.post('/posts', (req: Request, res: Response) => {
    const { title, content, author } = req.body;

    if (title && content && author) {
        const newPost = new Post(title, content, author);
        posts.push(newPost);

        res.status(201).json({ message: 'Inlägget har lagts till', post: newPost });
    }
    else {
        res.status(400).json({message: 'Du måste ange en titel (title), innehåll (content) och författare (author)'})
    }
})

// --------------- EDIT/PATCH POST EXTERNALLY ---------------- //
app.patch('/posts/:id', (req: Request, res: Response) => {
    const { title, content, author } = req.body

    if ( title && content && author) {
        const post = posts.find((posted) => posted.id === parseInt(req.params.id))

        if (!post) {
            res.status(404).json ({error: 'Det finns ingen post med det id:t, försök igen'})
            return
        }
        else {
            post.title = title;
            post.content = content;
            post.author = author;

            res.json({message: 'Posten har uppdaterats', data: post})
        }
    }
    else {
        res.status(400).json({message: 'Du måste ange en titel (title), innehåll (content) och författare (author)'})
    }
})

// ----------------- DELETE POST EXTERNALLY ------------------ //
app.delete('/posts/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const postIndex = posts.findIndex((posted) => posted.id === parseInt(id))

    if (postIndex === -1) {
        res.status(404).json({error: 'Det finns ingen post med det Id:t'})
    }
    else {
        posts.splice(postIndex, 1)
        res.json({message: 'Post raderad'})
    }
})


//  Syntax för att söka :) 
//  http://localhost:3000/posts?filter=Wilson
//  http://localhost:3000/posts?sort=asc