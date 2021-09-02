const categoryRepository = require("../repositories/categoryRepository");
const HttpError = require("../utils/httpError");
const {
  updateCategorySchema,
  insertCategorySchema,
} = require("../validations/categoryValidation");
const ERRORS = require("../utils/constants");

exports.getCategory = async (id) => {
  const category = await categoryRepository.findCategoryById(id);
  if (!category) throw new HttpError(404, ERRORS.INVALID_CATEGORY);
  return category;
};

exports.getAllCategories = async () => {
  return await categoryRepository.findAllCategories();
};

exports.getAllCategoriesLastUpdate = async () => {
  const categories = await categoryRepository.findAllCategoriesLastUpdate();
  return categories;
};

exports.searchCategoryName = async (filter) => {
  return await categoryRepository.searchCategory(filter);
};

exports.createCategory = async (category) => {
  const { name, photo } = category;  
  if (!name || !photo) {
    throw new HttpError(400, ERRORS.INVALID_DATA);
  }
  try {
    await insertCategorySchema.validateAsync(category);
  } catch (error) {
    throw new HttpError(400, ERRORS.INVALID_DATA);
  }
  return await categoryRepository.insertCategory(category);
};

exports.editCategory = async (categoryDetails, categoryId) => {
  const category = await categoryRepository.findCategoryById(categoryId);
  if (!category) throw new HttpError(404, ERRORS.INVALID_CATEGORY);
  /*try {
    await updateCategorySchema.validateAsync(categoryDetails);
  } catch (error) {
    throw new HttpError(400, ERRORS.INVALID_DATA);
  }*/
  return await categoryRepository.updateCategory(categoryId, categoryDetails);
};

exports.removeCategory = async (id) => {
  const foundCategory = await categoryRepository.findCategoryById(id);
  if (!foundCategory) throw new HttpError(404, ERRORS.INVALID_CATEGORY);
  return await categoryRepository.deleteCategory(id);
};
