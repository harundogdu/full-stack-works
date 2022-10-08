import { genSaltSync, hashSync } from 'bcryptjs';
import userModel from '../models/user.model';
import { LoginSchema, RegisterSchema } from '../types';

export default {
  // login user
  login: async (req, res) => {},
  // register user
  register: async (req, res) => {
    try {
      const { error } = RegisterSchema.validate(req.body);
      if (error) {
        return res.status(400).send({ error: error.details[0].message });
      }
      const { user, email, password } = req.body;

      const userExists = await userModel.findOne({ email });
      if (userExists)
        return res.status(400).send({ error: 'User already exists' });

      const salt = genSaltSync(10);
      const hashedPassword = hashSync(password, salt);

      const newUser = new userModel({
        ...user,
        email,
        password: hashedPassword
      });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
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
  updateUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await userModel.findByIdAndUpdate(userId, req.body, {
        new: true
      });
      if (!user) return res.status(404).json({ message: 'User not found' });

      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // delete user
  deleteUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await userModel.findByIdAndDelete(userId);
      if (!user) return res.status(404).json({ message: 'User not found' });

      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
