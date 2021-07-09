const { DataTypes } = require('sequelize');
const dbConnection = require('../config/db');
const { ROLE } = require('../utils/constants');

const User = dbConnection.define("user", {
  id: {
    primaryKey: true,
    allowNull: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  email: {
    type: DataTypes.STRING(200),
    unique: true
  },
  password: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING(150)
  },
  phone: {
    type: DataTypes.STRING(20)
  },
  avatar: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING(20),
    defaultValue: ROLE.USER
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }

}, {
  defaultScope: { attributes: { exclude: ['password'] } },
  scopes: { withPassword: { attributes: {} } },
});

User.prototype.toJSON = function () {
  const attributes = Object.assign({}, this.get());
  delete attributes.password;
  return attributes;
};

module.exports = User;