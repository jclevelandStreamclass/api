const dbConnection = require("../config/db");

const Serie = require("./Serie");
const Episode = require("./Episode");
const Category = require("./Category");
const SportsPlayer = require("./SportsPlayer");
const User = require("./User");

const loadModels = () => {
  User.hasMany(Serie);

  Serie.belongsToMany(User, { through: "UserSeries" });

  Serie.hasMany(Episode);

  Episode.belongsTo(Serie);

  Category.hasMany(Serie);

  Serie.belongsTo(Category);

  SportsPlayer.hasMany(Serie);

  Serie.belongsTo(SportsPlayer);

  dbConnection.sync().then(() => console.log("Estamos en el aire🤯🤯!!!!"));
};

module.exports = loadModels;
