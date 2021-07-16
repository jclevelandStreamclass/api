const Episode = require('../models/Episode');

exports.insertEpisode = async(episode) => {
    return await Episode.create(episode);
};

exports.findAllEpisodes = async() => {
    return await Episode.findAll({ order:[["number", "ASC"]]});
};

exports.findEpisodeById = async(id) => {
    return await Episode.findByPk(id);
}

exports.searchEpisode = async (filter) => {
    const {title} = filter
    return await Episode.findAll({where: {title}});
  }

exports.deleteEpisode = async(id) => {
    return  await Episode.destroy({where: {id}})
}

exports.updateEpisode = async(id, episodeDetails) => {
    await Episode.update(episodeDetails, { where: { id } });
    return await Episode.findByPk(id);
}