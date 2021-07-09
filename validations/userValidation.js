const Joi = require('joi');

exports.insertUserSchema = Joi.object({
  email: Joi.string(200).email().required(),
  password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/),
  name: Joi.string().max(150),
  avatar: Joi.string(),
  phone: Joi.string(20)
})