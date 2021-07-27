require("dotenv").config();
const User = require("../models/User");
const { ROLE } = require('../utils/constants');

const users = [
    {
        email: "test1@test.com",
        password: "00e40d7595815c419c89d177b42e2e71119451a66233b597f55797ed2d83971b",
        name: "test",
        phone:"911 11 11 11",
        avatar: "url ",
        role: ROLE.ADMIN,
        active: true,
  },
  {
    email: "test2@test.com",
    password: "00e40d7595815c419c89d177b42e2e71119451a66233b597f55797ed2d83971b",
    name: "test",
    phone: "911 11 11 11",
    avatar: "url ",
    role: ROLE.USER,
    active: true,
  },
  {
    email: "test3@test.com",
    password: "00e40d7595815c419c89d177b42e2e71119451a66233b597f55797ed2d83971b",
    name: "test",
    phone: "911 11 11 11",
    avatar: "url ",
    role: ROLE.PREMIUM,
    active: true,
  },
]



User.bulkCreate(users).then(() =>
  console.log("Users loaded")
);