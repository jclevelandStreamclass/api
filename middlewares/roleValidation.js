const HttpError = require("../utils/httpError");
const ERRORS = require("../utils/constants");

const roleValidation = (role) => {
  const roles = Array.isArray(role) ? role : [role];
  return (req, res, next) => {
    console.log(req.user)
    //if (!req.user?.active) throw new HttpError(402, ERRORS.INVALID_ACCOUNT);
    if (![...roles, "admin"].includes(req.user?.role))
      throw new HttpError(401, ERRORS.INVALID_AUTHORIZATION);
    next();
  };
};

module.exports = roleValidation;


