import { Request, Response } from "express"
import Posts from "../models/Posts";

// Hämta alla posts
export const fetchAllPosts = async (req: Request, res: Response) => {
    try {
        res.json(await Posts.find())
    } 
    catch(error: unknown) {
        const message = error instanceof Error ? error.message : 'Okänt fel'
        res.status(500).json({error: message}) 
    }
}

// // Sök efter post-ID
export const searhPostsById = async (req: Request, res: Response) => {
    try {
        const post = await Posts.findById(req.params.id);

        if (!post) {
            res.status(404).json({message: 'Det fins inte en post med det ID:t, försök igen!'})
            return;
        }
        res.json(post)
    }
    catch(error: unknown) {
        const message = error instanceof Error ? error.message : 'Okänt fel'
        res.status(500).json({error: message})
    }
}

// Skapa ny post
export const createPost = async (req: Request, res: Response) => {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
        res.status(400).json({error: 'Du måste ange en titel (title), innehåll (content) och författare (author)'}) 
        return; 
    }
    
    try {
        const newPost = new Posts({
            title: title,
            content: content, 
            author: author
        });
        const savedPost = await newPost.save();
        res.status(201).json({message: 'Post created', data: savedPost})
    }
    catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Okänt fel'
        res.status(500).json({error: message})
    }
}

// UPPDATERA POST
export const editPost = async (req: Request, res: Response) => {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
        res.status(400).json({error: 'Du måste ange en titel (title), innehåll (content) och författare (author)'}) 
        return; 
    }

    try {
        const editedPost = await Posts.updateOne(
            {_id: req.params.id},
            {$set: {
                title: title,
                content: content,
                author: author
                }
            }
        );
        if (editedPost.matchedCount == 0) {
            res.status(404).json({ message: 'Hittar ingen post med det id:t att uppdatera' });
            return;
        }
        res.json({message: 'Posten har uppdaterats', data: await Posts.findById(req.params.id)});

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Okänt fel';
        res.status(500).json({ error: message });
    }
}

// RADERA POST
export const deletePost = async (req: Request, res: Response) => {
    try {
        const deletedPost = await Posts.deleteOne({_id: req.params.id})

        if (deletedPost.deletedCount === 0) {
            res.status(404).json({error: 'Det finns ingen post med det Id:t'})
            return;
        }
        res.json({message: 'Post raderad'})
    }
    catch (error: unknown) {
        const message = error instanceof Error ? error.message :'Okänt fel'
        res.status(500).json({error: message})
    }
}