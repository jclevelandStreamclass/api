// const { Sequelize } = require('sequelize/types');
const Episode = require('../models/Episode');
const { Op, Sequelize, where } = require("sequelize");
const db = require("../config/db");


exports.insertEpisode = async(episode) => {
    return await Episode.create(episode);
};

exports.findAllEpisodes = async() => {
    return await Episode.findAll({ order:[["number", "ASC"]]});
};

exports.findEpisodeById = async(id) => {
    return await Episode.findByPk(id);
}

exports.findSumDurationEpisodes = async (searchSerieId) => {
    return await Episode.findAll({ attributes: [[Sequelize.fn('sec_to_time', Sequelize.fn('sum', Sequelize.fn('time_to_sec', Sequelize.col('duration')))), 'total_time']], where: { serieId: searchSerieId }, });
};

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