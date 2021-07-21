const { DataTypes } = require("sequelize");
const db = require("../config/db");

const UserSeries = db.define("UserSeries", {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    serieId: {
        type: DataTypes.CHAR(36)
    },
    userId: {
        type: DataTypes.CHAR(36)
    },
    added: {
        type: DataTypes.BOOLEAN
    },
    seen: {
        type: DataTypes.BOOLEAN
    }


});

module.exports = UserSeries;
