import express from 'express';
import { AuthController } from '../controllers';

const Router = express.Router();

Router
    .route('/signup').post(AuthController.register)
    .route('/login').post(AuthController.login)
    .route('/logout').post(AuthController.logout)
    .route('/user/:userId').get(AuthController.getUser)
    .route('/user/:userId').put(AuthController.updateUser)
    .route('/user/:userId').delete(AuthController.deleteUser);

export default Router;
