const { Op } = require("sequelize");
const UserPayment = require("../models/UserPayment");


exports.findAllUsersPayment = async () => {
  return await UserPayment.findAll();
};

exports.findUserPaymentById = async (id) => {
  return await UserPayment.findByPk(id);
};

exports.insertUserPayment = async (payment) => {
  return await UserPayment.create(payment);
};

exports.updateUserPayment = async (id, userDetails) => {
  return await UserPayment.update(userDetails, { where: { id } });
};

exports.deleteUserPayment = async (id) => {
  return await UserPayment.destroy({ where: { id } });
};
