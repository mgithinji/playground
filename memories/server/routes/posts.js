// adding all the routes that have to do with posts
import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// creating routes

// alteranative without controllers
// router.get('/', (req, res) => {
//     res.send('THIS WORKS!');
// });

// better implementation with controllers/posts.js functions
router.get('/', getPosts);
router.post('/', createPost);

export default router;