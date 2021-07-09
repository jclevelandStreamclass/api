const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const SportsPlayer = dbConnection.define("sportsPlayer", {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING(150),
    },
    bio: {
        type: DataTypes.STRING(500),
    },
    job: {
        type: DataTypes.STRING(50),
    },
    photo: {
        type:DataTypes.STRING,
    },

});

module.exports = SportsPlayer;