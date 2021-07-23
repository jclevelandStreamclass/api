const {DataTypes} = require("sequelize");
const dbConnection = require('../config/db');
const {ACTIVITY} = require('../utils/constants');


const userPayment = dbConnection.define("UserPayment",{
    id: {
        primaryKey: true,
        allowNull: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      status : {
        type:DataTypes.ENUM(Object.values(ACTIVITY)),
        defaultValue: ACTIVITY.INACTIVE
      }
})


module.exports = userPayment;