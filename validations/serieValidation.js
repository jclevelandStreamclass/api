const Joi = require("joi");

exports.insertSerieSchema = Joi.object({
  title: Joi.string().min(1).required(),
  description: Joi.string().min(1).required(),
  photo: Joi.string().min(1).required(),
});

exports.updateSerieSchema = Joi.object({
  title: Joi.string().min(1),
  description: Joi.string().min(1),
  photo: Joi.string().min(1),
});
