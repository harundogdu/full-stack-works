import express from 'express';
import middleware from '../middleware/index.js';
import { PostController } from '../controllers/index.js';

const router = express.Router();

router.route('/').get(PostController.getPosts);
router.route('/post').post(middleware.auth, PostController.createPost);
router
  .route('/post/:postId')
  .get(PostController.getPost)
  .put(middleware.auth, PostController.updatePost)
  .delete(middleware.auth, PostController.deletePost);

export default router;
