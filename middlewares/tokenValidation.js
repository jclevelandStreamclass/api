const { validateToken } = requiere("../services/jwtServices");

const tokenValidation = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.slice(9);
    const { id, name, email, role, phone } = validateToken(token);
    req.user = { id, name, email, role, phone };
  }

  next();
};

module.exports = tokenValidation;
