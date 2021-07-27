const { Op } = require("sequelize");
const Serie = require("../models/Serie");
const SportsPlayer = require("../models/SportsPlayer");

// FIND
exports.findAllSportsPlayers = async () => {
  return await SportsPlayer.findAll();
};

exports.findSportsPlayerById = async (id) => {
  return await SportsPlayer.findByPk(id, {
    // include: [{ model: Episode, attributes: [["title", "duration", "video"]] }],
  });
};

// SEARCH
exports.findSportPlayerSeries = async (filter) => {
  const { name } = filter;
  return await SportsPlayer.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
    },
    include: [{ model: Serie, attributes: ["id", "title"] }],
  });
};

// INSERT
exports.insertSportsPlayer = async (sportsPlayer) => {
  return await SportsPlayer.create(sportsPlayer);
};

// UPDATE
exports.updateSportsPlayer = async (sportsPlayerDetails, id) => {
  await SportsPlayer.update(sportsPlayerDetails, { where: { id } });
  return await SportsPlayer.findByPk(id);
};

// DELETE
exports.deleteSportsPlayer = async (id) => {
  return await SportsPlayer.destroy({ where: { id } });
};
