const SportsPlayerRepository = require("../repositories/SportsPlayerRepository");

exports.getAllSportsPlayers = async () => {
  const sportsPlayer = await SportsPlayerRepository.findAllSportsPlayers();
  return sportsPlayer;
};

exports.getSportsPlayer = async (id) => {
  const sportsPlayer = await SportsPlayerRepository.findSportsPlayerById(id);
  return sportsPlayer;
};

exports.createSportsPlayer = async (sportsPlayer) => {
  if (!sportsPlayer) {
    throw new Error();
  }
  return await SportsPlayerRepository.insertSportsPlayer(sportsPlayer);
};

exports.editSportsPlayer = async (sportsPlayerData, id) => {
  const sportsPlayer = await SportsPlayerRepository.updateSportsPlayer(
    sportsPlayerData,
    id
  );
  return sportsPlayer;
};

exports.removeSportsPlayer = async (id) => {
  return await SportsPlayerRepository.deleteSportsPlayer(id);
};
