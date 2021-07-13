const multer = require("multer");
const storage = require("../config/cloudinary");

const multerMiddleware = { storage };

module.exports = multerMiddleware;
