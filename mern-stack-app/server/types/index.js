import Joi from 'joi';

export const PostSchema = Joi.object({
  authorId: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  image: Joi.string().required()
});

export const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const userSchema = Joi.object().keys({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  username: Joi.string().required()
});

export const RegisterSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  user: userSchema
});
