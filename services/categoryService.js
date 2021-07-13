const categoryRepository = require("../repositories/categoryRepository");
const HttpError = require("../utils/httpError");
const { updateCategorySchema } = require("../validations/categoryValidation");

exports.getCategory = async (id) =>{
    const category = await categoryRepository.findCategoryById(id);
    return category.toJSON();
};

exports.getAllCategories = async()=>{
    return await categoryRepository.findAllCategories();
};

exports.createCategory = async (category) =>{
    if(!category.name){
        throw new HttpError(400, "Miss name");
    };
    await categoryRepository.insertCategory(category);
};

exports.editCategory = async(categoryDetails, categoryId)=>{
    const category = await categoryRepository.findCategoryById(categoryId);
    const validatioData = await updateCategorySchema.validateAsync(categoryDetails)
    await categoryRepository.updateCategory(categoryId, validatioData)
};

exports.removeCategory = async(id)=>{
    await categoryRepository.deleteCategory(id);
};
