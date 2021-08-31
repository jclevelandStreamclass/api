const HttpError = require("../utils/httpError");
const ERRORS = require("../utils/constants");

const roleValidationAdmin = () => {
  return (req, res, next) => {

    if (!req.user.role) {
      throw new HttpError(402, ERRORS.INVALID_AUTHORIZATION);
    }
    if (!req.user.active) 
      throw new HttpError(402, ERRORS.INVALID_ACCOUNT);
    if (!["admin"].includes(req.user.role))
      throw new HttpError(401, ERRORS.INVALID_AUTHORIZATION);
    next();
  };
};

module.exports = roleValidationAdmin;
