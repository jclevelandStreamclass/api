const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");
const {CATEGORY} = require('../utils/constants');

const Category = dbConnection.define("category",{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(50),
        defaultValue: CATEGORY.NULL
    },
    photo:{
        type: DataTypes.STRING,
    }
});

module.exports = Category;