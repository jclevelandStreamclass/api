const { Op } = require("sequelize");
const User = require("../models/User");
exports.findAllUsers = async () => {
  return await User.findAll();
};

exports.findUserById = async (id) => {
  return await User.findByPk(id);
};

exports.findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.findUserWithPasswordByEmail = async (email) => {
  return await User.scope("withPassword").findOne({
    where: {
      [Op.or]: [{ phone: email }, { email }],
    },
  });
};

exports.insertUser = async (usuario) => {
  return await User.create(usuario);
};

exports.updateUser = async (id, userDetails) => {
  return await User.update(userDetails, { where: { id } });
};

exports.deleteUser = async (id) => {
  return await User.destroy({ where: { id } });
};
