
const HttpError = require("../utils/httpError");
const userPaymentRepository = require("../repositories/userPaymentRepository");
const ERRORS = require('../utils/constants');


exports.paymentData = async (payment) => {
  //const userPaymentRepositoryvalid = await userPaymentRepository.validateAsync(payment);
  return await userPaymentRepository.insertUserPayment(payment);
};