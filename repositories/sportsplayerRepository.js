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
