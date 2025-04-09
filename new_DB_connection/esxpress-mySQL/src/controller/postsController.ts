import { Request, Response } from "express"
import { posts, Post } from "../modules/Posts";

import { db } from "../config/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";

// Hämta alla posts
export const fetchAllPosts = async (req: Request, res: Response) => {
    try {
    const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM posts')
    res.json(rows)
    } 
    catch(error: unknown) {
        const message = error instanceof Error ? error.message : 'Okänt fel'
        res.status(500).json({error: message}) 
    }
}

// Sök efter post-ID
export const searhPostsById = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const sql = `
        SELECT * FROM posts
        WHERE id = ?
        `
        const [rows] = await db.query<RowDataPacket[]>(sql, [id])

        const post = rows[0];
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
        const sql = `
            INSERT INTO posts (title, content, author)
            VALUES (?, ?, ?)
        `
        const [result] = await db.query<ResultSetHeader>(sql, [title, content, author])
        res.status(201).json({message: 'Post tillagd', id: result.insertId})
    }
    catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Okänt fel'
        res.status(500).json({error: message})
    }
}

// UPPDATERA POST -- LÖS SJÄLV --
export const editPost = async (req: Request, res: Response) => {
    const { title, content, author } = req.body;
    const id = req.params.id;

    if (!title || !content || !author) {
        res.status(400).json({error: 'Du måste ange en titel (title), innehåll (content) och författare (author)'}) 
        return; 
    }

    try {
        const sql = `
            UPDATE posts
            SET title = ?, content = ?, author = ?
            WHERE id = ?
        `;

        const [result] = await db.query<ResultSetHeader>(sql, [title, content, author, id]);

        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Ingen post med det angivna ID:t hittades' });
            return;
        }

        res.json({ message: 'Posten har uppdaterats' });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Okänt fel';
        res.status(500).json({ error: message });
    }
}

// RADERA POST
export const deletePost = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const sql = `
        DELETE FROM posts 
        WHERE id = ?
        `

        const [result] = await db.query<ResultSetHeader>(sql, [id])
        if (result.affectedRows === 0) {
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