const Joi = require("joi");

const insertCategorySchema = Joi.object({
  name: Joi.string().max(50),
  photo: Joi.string().min(1),
});

const updateCategorySchema = Joi.object({
  name: Joi.string().max(50),
  photo: Joi.string(),
});

module.exports = { updateCategorySchema, insertCategorySchema };