const userRepository = require("../repositories/userRepository");
const encryptPassword = require("../utils/encryptPassword");
const HttpError = require("../utils/httpError");
const { generateToken } = require("./jwtServices");
const {
  insertUserSchema,
  updateUserSchema,
} = require("../validations/userValidation");
const tokenRepository = require("../repositories/tokenOperationRepository");
const mailService = require("../services/mailService");

exports.getAllUsers = async () => {
  return userRepository.findAllUsers();
};

exports.getUserById = async (id) => {
  const user = await userRepository.findUserById(id);
  return user.toJSON();
};

exports.getUserByEmail = async (email) => {
  return userRepository.findUserByEmail(email);
};

exports.signUp = async (userData) => {
  // console.log(userData);
  const validateUser = await insertUserSchema.validateAsync(userData);

  const encryptedPassword = await encryptPassword(validateUser.password);

  const user = await userRepository.insertUser({
    ...validateUser,
    password: encryptedPassword,
  });

  console.log(user);
  const tokenOperation = await tokenRepository.createTokenOperation({
    userId: user.toJSON().id,
    operation: "ACTIVATION",
  });

  // const text = `http://localhost:3000/users/activate/${
  //   tokenOperation.toJSON().id
  // }`;

  const text = `http://localhost:4200/login/${tokenOperation.toJSON().id}`;
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

  const user = await userRepository.findUserWithPasswordByEmail(email);
  if (!user) throw new Error("Not found user");

  const encryptedPassword = await encryptPassword(password);
  console.log(password);
  console.log(encryptedPassword);
  if (user.password !== encryptedPassword) throw new Error("Wrong password");
  console.log(user.name);
  const token = generateToken({
    id: user.id,
    email: user.email,
    name: user.name,
    phone: user.phone,
    role: user.role,
    active: user.active,
  });

  const userDetails = {
    id: user.id,
    bearer: token,
    email: user.email,
    name: user.name,
    phone: user.phone,
    role: user.role,
    active: user.active,
    avatar: user.avatar,
  };
  console.log(user.name);

  return userDetails;
};

exports.editUser = async (id, userData) => {
  const user = await userRepository.findUserById(id);
  if (!user) throw new Error("Not found user");

  const validateUser = await updateUserSchema.validateAsync(userData);

  if (validateUser.password) {
    validateUser.password = await encryptPassword(validateUser.password);
  }

  const updateUser = await userRepository.updateUser(id, validateUser);

  if (userData.role) {
    const foundUser = await userRepository.findUserById(id);
    const token = generateToken({
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
      phone: foundUser.phone,
      role: foundUser.role,
      active: foundUser.active,
    });

    const userDetails = {
      id: foundUser.id,
      bearer: token,
      email: foundUser.email,
      name: foundUser.name,
      phone: foundUser.phone,
      role: foundUser.role,
      active: foundUser.active,
      avatar: foundUser.avatar,
    };

    return userDetails;
  }

  return updateUser;
};

exports.removeUser = async (id) => {
  if (!id) throw new Error();

  await userRepository.deleteUser;
};
