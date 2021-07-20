const Joi = require("joi");

exports.insertUserSchema = Joi.object({
  email: Joi.string().max(200).email().required(),
  password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/),
  name: Joi.string().max(150),
  avatar: Joi.string(),
  phone: Joi.string().max(12),
});

exports.updateUserSchema = Joi.object({
  email: Joi.string().max(200).email(),
  password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/),
  name: Joi.string().max(150),
  avatar: Joi.string(),
  phone: Joi.string().max(12),
});
