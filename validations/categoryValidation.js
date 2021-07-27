  
const Joi = require("joi");

const updateCategorySchema = Joi.object({
  name: Joi.string().max(50),
  photo: Joi.string().min(1),
});

module.exports = { updateCategorySchema };