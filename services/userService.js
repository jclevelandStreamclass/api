const userRepository = require('../repositories/userRepository');
const encryptPassword = require('../utils/encryptPassword');
const HttpError = require('../utils/httpError');
const { generateToken } = require('./jwtServices');
const { insertUserSchema } = require('../validations/userValidation');

exports.getAllUsers = async () => {
  return userRepository.findAllUsers();
}

exports.getUserById = async (id) => {
  const user = await userRepository.findUserById();
  return user.toJSON();
}

exports.getUserByEmail = async (email) => {
  return userRepository.findUserByEmail(email)
}

exports.signUp = async (userData) => {
  const validateUser = await insertUserSchema.validateAsync(userData);
  const encryptedPassword = await encryptPassword(validateUser.password);

  await userRepository.insertUser({
    ...validateUser,
    password: encryptedPassword
  });
};