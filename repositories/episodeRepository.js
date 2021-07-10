const Episode = require('../models/Episode');

exports.insertEpisode = async(episode) => {
    return await Episode.create(episode);
};

exports.findAllEpisodes = async() => {
    return await Episode.findAll({ order:[["duration", "DESC"]]});
};

exports.findEpisodeById = async(id) => {
    return await Episode.findByPk(id);
}

exports.deleteEpisode = async(id) => {
    return  await Episode.destroy({where: {id}})
}

exports.updateEpisode = async(id, episodeDetails) => {
    await Episode.update(episodeDetails, { where: { id } });
    return await Episode.findByPk(id);
}