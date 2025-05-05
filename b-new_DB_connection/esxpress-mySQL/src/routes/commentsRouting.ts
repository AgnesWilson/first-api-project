import express from 'express';
import { fetchAllComments, searhCommentsById, createComment, editComment, deleteComment } from '../controller/commentsController';

const router = express.Router()

router.get

router.get('/', fetchAllComments)
router.get('/:id', searhCommentsById)
router.post('/', createComment)
router.patch('/:id', editComment)
router.delete('/:id', deleteComment)

export default router;