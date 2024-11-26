import express from 'express';
import { createBlog, getBlogs, getBlogById } from '../controllers/blogController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();
//Routes
router.post('/', authMiddleware,createBlog);
router.post('/',getBlogs);
router.post('/:id', getBlogById);

export default router;