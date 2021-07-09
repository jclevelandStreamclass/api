const { DataTypes } = require('sequelize');
const dbConnection = require('../config/db');

const Episode = dbConnection.define('episode', {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    title: {
        type: DataTypes.STRING(50),
    },
    duration: {
        type: DataTypes.TIME,
        //TODO check functionality
    },
    description: {
        type: DataTypes.STRING(500),
    },
    photo: {
        type: DataTypes.STRING,
    },
    video: {
        type: DataTypes.STRING,
    }

});

module.exports = Episode;


