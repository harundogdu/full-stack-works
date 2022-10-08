import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/index.js';
import { LoginSchema, RegisterSchema } from '../types/index.js';

export default {
  // login user
  login: async (req, res) => {
    try {
      const { error } = LoginSchema.validate(req.body);
      if (error)
        return res.status(400).json({ error: error.details[0].message });
      /* exclude password  */
      const user = await UserModel.findOne({ email: req.body.email });
      if (!user) return res.status(400).json({ error: 'Invalid credentials' });

      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch)
        return res.status(400).json({ error: 'Invalid credentials' });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
      });

      res.status(201).send({
        token,
        user: {
          id: user._id,
          name: user.user.name,
          surname: user.user.surname,
          username: user.user.username,
          email: user.email
        }
      });
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

      const userExists = await UserModel.findOne({ email });
      if (userExists)
        return res.status(400).send({ error: 'User already exists' });

      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const newUser = new UserModel({
        user,
        email,
        password: hashedPassword
      });

      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
      });

      res.status(201).send({
        token,
        user: {
          id: savedUser._id,
          user: savedUser.user,
          email: savedUser.email
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  },
  // logout user
  logout: async (req, res) => {
    try {
      req.session.destroy();
      res.clearCookie('token');
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // get user
  getUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await UserModel.findById(userId, { password: 0 });
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
      const user = await UserModel.findByIdAndUpdate(userId, req.body, {
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
      const user = await UserModel.findByIdAndDelete(userId);
      if (!user) return res.status(404).json({ message: 'User not found' });

      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
