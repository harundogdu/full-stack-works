import express from 'express';
import { PostController } from '../controllers';

const Router = express.Router();

Router
    .route('/posts').get(PostController.getPosts)
    .route('/post/:postId').get(PostController.getPost)
    .route('/post').post(PostController.createPost)
    .route('/post/:postId').put(PostController.updatePost)
    .route('/post/:postId').delete(PostController.deletePost);

export default Router;
