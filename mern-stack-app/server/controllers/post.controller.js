import postModel from '../models/post.model';
import userModel from '../models/user.model';
import Joi from 'joi';

const PostSchema = Joi.object({
  authorId: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  image: Joi.string().required()
});

export default {
  // Create and Save a new Post
  create: async (req, res) => {
    try {
      const { error } = PostSchema.validateAsync(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });

      const { authorId, title, content, image } = req.body;
      const author = await userModel.findById(authorId);
      if (!author) return res.status(404).json({ message: 'Author not found' });

      const post = await postModel.create({
        author: authorId,
        title,
        content,
        image
      });
      return res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Retrieve and return all posts from the database.
  getPosts: async (req, res) => {
    try {
      const posts = await postModel
        .find({})
        .sort({ date: -1 })
        .populate('author');

      return res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Find a single post with a postId
  getPost: async (req, res) => {
    try {
      const { postId } = req.params;
      const currentPost = await postModel.findById(postId).populate('author');
      if (!currentPost)
        return res.status(404).json({ message: 'Post not found' });

      return res.status(200).json(currentPost);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Update a post identified by the postId in the request
  update: async (req, res) => {},
  // Delete a post with the specified postId in the request
  delete: async (req, res) => {}
};
