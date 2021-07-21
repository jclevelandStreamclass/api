const dbConnection = require("../config/db");

const Serie = require("./Serie");
const Episode = require("./Episode");
const Category = require("./Category");
const SportsPlayer = require("./SportsPlayer");
const User = require("./User");
const TokenOperation = require("./TokenOperation");

const loadModels = () => {
  User.hasMany(Serie, {});
  Serie.belongsToMany(User, { through: "UserSeries" });

  Serie.hasMany(Episode, {});

  Episode.belongsTo(Serie);

  Category.hasMany(Serie, {});

  Serie.belongsTo(Category);

  SportsPlayer.hasMany(Serie, {});

  Serie.belongsTo(SportsPlayer);
  User.hasMany(TokenOperation);
  TokenOperation.belongsTo(User);

  dbConnection
    .sync({ alter: true })
    .then(() => console.log("Estamos en el aire🤯🤯!!!!"));
};

module.exports = loadModels;
