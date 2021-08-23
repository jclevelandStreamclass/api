const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const validateToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
};

module.exports = { generateToken, validateToken };
