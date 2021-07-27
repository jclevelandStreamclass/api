const { validateToken } = require("../services/jwtServices");

const tokenValidation = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.slice(7);
    const { id, name, email, role, phone, active } = validateToken(token);
    req.user = { id, name, email, role, phone, active };
  }

  next();
};

module.exports = tokenValidation;
