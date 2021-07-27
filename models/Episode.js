const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Episode = dbConnection.define("episode", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  number: {
    type: DataTypes.TINYINT
  },
  title: {
    type: DataTypes.STRING(50),
  },
  duration: {
    type: DataTypes.TIME,    
  },
  description: {
    type: DataTypes.STRING(500),
  },
  photo: {
    type: DataTypes.STRING,
  },
  video: {
    type: DataTypes.STRING,
  },
  seen: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = Episode;
