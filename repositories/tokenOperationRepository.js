const TokenOperation = require("../models/TokenOperation");

exports.createTokenOperation = async (operation) => {
  return await TokenOperation.create(operation);
};

exports.findTokenOperation = async (id) => {
  return await TokenOperation.findByPk(id);
};

exports.deleteTokenOperation = async (id) => {
  return await TokenOperation.destroy({ where: { id } });
};
