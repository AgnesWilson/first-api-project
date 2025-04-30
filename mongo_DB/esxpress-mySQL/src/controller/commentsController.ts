import { Request, Response } from "express"

import { db } from "../config/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";

// Hämta alla kommentarer
export const fetchAllComments = async (req: Request, res: Response) => {
    try {
    const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM comments')
    res.json(rows)
    } 
    catch(error: unknown) {
        const message = error instanceof Error ? error.message : 'Okänt fel'
        res.status(500).json({error: message}) 
    }
}

// Sök efter post-ID
export const searhCommentsById = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const sql = `
        SELECT * FROM comments
        WHERE id = ?
        `
        const [rows] = await db.query<RowDataPacket[]>(sql, [id])

        const post = rows[0];
        if (!post) {
            res.status(404).json({message: 'Det fins inte en kommentar med det ID:t, försök igen!'})
            return;
        }
        res.json(post)
    }
    catch(error: unknown) {
        const message = error instanceof Error ? error.message : 'Okänt fel'
        res.status(500).json({error: message})
    }
}

// Skapa ny kommentar
export const createComment = async (req: Request, res: Response) => {
    const { heading, content, author, postId } = req.body;

    if (!heading || !content || !author) {
        res.status(400).json({error: 'Du måste ange en titel (heading), innehåll (content), författare (author) och id på den post som du vill kommentera'}) 
        return; 
    }
    
    try {
        const sql = `
            INSERT INTO comments (comment_heading, comment_content, comment_author, post_id)
            VALUES (?, ?, ?, ?)
        `
        const [result] = await db.query<ResultSetHeader>(sql, [heading, content, author, postId])
        res.status(201).json({message: 'Kommentar tillagd', id: result.insertId})
    }
    catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Okänt fel'
        res.status(500).json({error: message})
    }
}

// UPPDATERA KOMMENTAR 
export const editComment = async (req: Request, res: Response) => {
    const { title, content, author } = req.body;
    const id = req.params.id;

    if (!title || !content || !author) {
        res.status(400).json({error: 'Du måste ange en titel (title), innehåll (content) och författare (author)'}) 
        return; 
    }

    try {
        const sql = `
            UPDATE comments
            SET comment_heading = ?, comment_content = ?, comment_author = ?
            WHERE comment_id = ?
        `;

        const [result] = await db.query<ResultSetHeader>(sql, [title, content, author, id]);

        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Ingen kommentar med det angivna ID:t hittades' });
            return;
        }

        res.json({ message: 'Kommentaren har uppdaterats' });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Okänt fel';
        res.status(500).json({ error: message });
    }
}

// RADERA KOMMENTAR
export const deleteComment = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const sql = `
        DELETE FROM comments 
        WHERE comment_id = ?
        `

        const [result] = await db.query<ResultSetHeader>(sql, [id])
        if (result.affectedRows === 0) {
            res.status(404).json({error: 'Det finns ingen kommentar med det Id:t'})
            return;
        }
        res.json({message: 'Kommentar raderad'})
    }
    catch (error: unknown) {
        const message = error instanceof Error ? error.message :'Okänt fel'
        res.status(500).json({error: message})
    }
}