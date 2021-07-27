const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const TokenOperation = dbConnection.define("TokenOperation", {
  id: {
    defaultValue: DataTypes.UUIDV4,
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  operation: {
    type: DataTypes.ENUM(["RECOVERY", "ACTIVATION"]),
    allowNull: false,
  },
});

module.exports = TokenOperation;
