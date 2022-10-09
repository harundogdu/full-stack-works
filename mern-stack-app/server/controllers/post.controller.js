import { PostModel, UserModel } from '../models/index.js';
import { PostSchema } from '../types/index.js';
import jwt from 'jsonwebtoken';

export default {
  // Create and Save a new Post
  createPost: async (req, res) => {
    try {
      const { error } = PostSchema.validateAsync(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });

      const { title, content, image, tag } = req.body;
      const token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const author = await UserModel.findById(decoded.id);
      if (!author) return res.status(404).json({ message: 'Author not found' });

      const post = await PostModel.create({
        author : author._id,
        title,
        content,
        image,
        tag
      });
      return res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Retrieve and return all posts from the database.
  getPosts: async (req, res) => {
    try {
      const posts = await PostModel.find({})
        .sort({ date: -1 })
        .populate('author', '-password');

      return res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Find a single post with a postId
  getPost: async (req, res) => {
    try {
      const { postId } = req.params;
      const currentPost = await PostModel.findById(postId).populate('author');
      if (!currentPost)
        return res.status(404).json({ message: 'Post not found' });

      return res.status(200).json(currentPost);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Update a post identified by the postId in the request
  updatePost: async (req, res) => {
    try {
      const { postId } = req.params;
      const currentPost = await PostModel.findByIdAndUpdate(postId, req.body, {
        new: true
      });
      if (!currentPost)
        return res.status(404).json({ message: 'Post not found' });

      return res.status(200).json(currentPost);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Delete a post with the specified postId in the request
  deletePost: async (req, res) => {
    try {
      const { postId } = req.params;
      const currentPost = await PostModel.findByIdAndDelete(postId);
      if (!currentPost)
        return res.status(404).json({ message: 'Post not found' });

      return res.status(200).json({ message: 'Post deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
