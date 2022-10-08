import express from 'express';
import { PostController } from '../controllers/index.js';

const router = express.Router();

router.route('/').get(PostController.getPosts);
router.route('/post').post(PostController.createPost);
router.route('/post/:postId')
  .get(PostController.getPost)
  .put(PostController.updatePost)
  .delete(PostController.deletePost);

export default router;
