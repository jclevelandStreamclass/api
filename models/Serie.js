const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");
const Category = require("./Category")

const Serie = dbConnection.define("serie", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING(25),
  },
  description: { 
    type: DataTypes.STRING(500),
  },
  photo: {
    type: DataTypes.STRING,
  },
  

});

module.exports = Serie;
