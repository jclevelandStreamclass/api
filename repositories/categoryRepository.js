const Category = require("../models/Category");
const Serie = require("../models/Serie");

exports.findAllCategories = async () =>{
    return await Category.findAll();
};

exports.findCategoryById = async (id) => {
    return await Category.findByPk(id, {include:Serie});
};

exports.insertCategory = async (category)=>{
    return await Category.create(category);
};

exports.updateCategory = async (id, categoryDetails) => {
    return await Category.update(categoryDetails, {where: {id}});
};

exports.deleteCategory = async (id) => {
    return await Category.destroy({where: {id}});
};





