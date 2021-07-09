const jwt = require('jsonwebtoken');

const {SALT}=process.env;

const validateToken = (token)=>{
    return jwt.verify(token, SALT);
};

const generateToken = (id, name, email, role, phone) =>{
    return jwt.sign({id, name, email, role, phone}, SALT, {expiresIn: "24h"})
};

module.exports = {generateToken, validateToken};