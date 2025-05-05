import express from 'express';
import { fetchAllPosts, searhPostsById, createPost, editPost, deletePost } from '../controller/postsController';

const router = express.Router()

router.get

router.get('/', fetchAllPosts)
router.get('/:id', searhPostsById)
// ------- LEKTION NUMMER TVÅ ------- //
router.post('/', createPost)
router.patch('/:id', editPost)
router.delete('/:id', deletePost)

export default router;