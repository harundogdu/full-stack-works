import { genSaltSync, hashSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import userModel from '../models/user.model';
import { LoginSchema, RegisterSchema } from '../types';

export default {
  // login user
  login: async (req, res) => {
    try {
      const { error } = LoginSchema.validate(req.body);
      if (error)
        return res.status(400).json({ error: error.details[0].message });

      const user = await userModel.findOne({ email: req.body.email });
      if (!user) return res.status(400).json({ error: 'Invalid credentials' });

      const isMatch = await user.comparePassword(req.body.password);
      if (!isMatch)
        return res.status(400).json({ error: 'Invalid credentials' });

      const token = sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
      });

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
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

      const savedUser = await newUser.save();
      const token = sign({ id: savedUser._id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
      });

      res.status(201).send({ token });
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
