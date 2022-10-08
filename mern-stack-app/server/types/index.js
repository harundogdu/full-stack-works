import Joi from 'joi';

export const PostSchema = Joi.object({
  authorId: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  image: Joi.string().required()
});

export const UserSchema = Joi.object({
  user: Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    username: Joi.string().required()
  }),
  email: Joi.string().email().required(),
  password: Joi.string().required()
});
