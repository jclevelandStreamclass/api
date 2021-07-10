const userRepository = require("../repositories/userRepository");
const encryptPassword = require("../utils/encryptPassword");
const HttpError = require("../utils/httpError");
const { generateToken } = require("./jwtServices");
const { insertUserSchema } = require("../validations/userValidation");

exports.findAllUsers = async () => {
  return userRepository.findAllUsers();
};
