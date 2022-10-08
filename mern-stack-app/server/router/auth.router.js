import express from 'express';
import AuthController from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/signup').post(AuthController.register);
router.route('/login').post(AuthController.login);
router.route('/logout').post(AuthController.logout);
router.route('/user/:userId')
  .get(AuthController.getUser)
  .put(AuthController.updateUser)
  .delete(AuthController.deleteUser);

export default router;
