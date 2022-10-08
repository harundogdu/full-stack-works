import userModel from '../models/user.model';
import { LoginSchema, RegisterSchema } from '../types';

export default {
  // login user
  login: async (req, res) => {},
  // register user
  register: async (req, res) => {},
  // logout user
  logout: async (req, res) => {},
  // get user
  getUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await userModel.findById(userId);
      if (!user) return res.status(404).json({ message: 'User not found' });

      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // update user
  updateUser: async (req, res) => {},
  // delete user
  deleteUser: async (req, res) => {}
};
