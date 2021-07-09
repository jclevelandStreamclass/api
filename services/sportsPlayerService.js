const SportsPlayerRepository = require("../repositories/SportsPlayerRepository");

exports.getAllSportsPlayers = async () => {
    const sportsPlayer = await SportsPlayerRepository.findAllSportsPlayers();
    return SportsPlayerRepository;
};

exports.getSportsPlayer = async (id) => {
    const sportsPlayer = await SportsPlayerRepository.findSportsPlayerById(id);
    return SportsPlayer;
};

exports.createSportsPlayer = async (sportsPlayer) => {
    if (!sportsPlayer) {
        throw new Error;
    }
    return await SportsPlayerRepository.insertSportsPlayer(sportsPlayer);
};

exports.editSportsPlayer = async (sportsPlayerData, id) => {
    await SportsPlayerRepository.editSportsPlayerById(sportsPlayerData, id);
};

exports.removeSportsPlayer = async (id) => {
    return await SportsPlayerRepository.deleteSportsPlayer(id); 
};