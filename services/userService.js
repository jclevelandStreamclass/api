const userRepository = require("../repositories/userRepository");
const encryptPassword = require("../utils/encryptPassword");
const HttpError = require("../utils/httpError");
const { generateToken } = require("./jwtServices");
const { insertUserSchema } = require("../validations/userValidation");
const tokenRepository = require("../repositories/tokenOperationRepository");
const mailService = require("../services/mailService");

exports.getAllUsers = async () => {
  return userRepository.findAllUsers();
};

exports.getUserById = async (id) => {
  const user = await userRepository.findUserById();
  return user.toJSON();
};

exports.getUserByEmail = async (email) => {
  return userRepository.findUserByEmail(email);
};

exports.signUp = async (userData) => {
  const validateUser = await insertUserSchema.validateAsync(userData);
  const encryptedPassword = await encryptPassword(validateUser.password);

  // // TE DEJO EL EDIT EL LOGIN Y EL DELETE
  // const email = userData.email;
  // const emailMessage = `< !DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Transitional//EN” “https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  //   <html xmlns=”https://www.w3.org/1999/xhtml”>`;
  // const emailSubjectLine = "Confirmar email";

  // await sendConfirmationMail(email, emailMessage, emailSubjectLine);

  const user = await userRepository.insertUser({
    ...validateUser,
    password: encryptedPassword,
  });
  const tokenOperation = await tokenRepository.createTokenOperation({
    userId: user.toJSON().id,
    operation: "ACTIVATION",
  });

  const text = `http://localhost:3000/users/activate/${
    tokenOperation.toJSON().id
  }`;
  const subject = "Activate your account";
  const email = user.email;

  await mailService.sendConfirmationMail({ email, subject, text });
};

exports.activateUser = async (id) => {
  const tokenOperation = await tokenRepository.findTokenOperation(id);
  await userRepository.updateUser(tokenOperation.toJSON().userId, {
    active: 1,
  });
  await tokenRepository.deleteTokenOperation(id);
};

exports.login = async ({ email, password }) => {
  if (!email || !password) throw new Error("Invalid data provided");

  const user = await userRepository.findUserByEmail(email);

  if (!user) throw new Error("Not found user");

  const encryptedPassword = await encryptPassword(password);

  if (user.password !== encryptedPassword) throw new Error("Wrong password");

  const token = generateToken({
    id: user.id,
    email: user.email,
    phone: user.phone,
    role: user.role,
    active: user.active,
  });

  return token;
};

exports.editUser = async (id, userData) => {
  const validateUser = await insertUserSchema.validateAsync(userData);

  if (validateUser.password) {
    validateUser.password = await encryptPassword(validateUser.password);
  }

  // retornamos user??
  const user = await userRepository.updateUser(id, validation);

  return user;
};

exports.removeUser = async (id) => {
  if (!id) throw new Error();

  await userRepository.deleteUser;
};
