const episodeRepository = require('../repositories/episodeRepository');
const nodemailer = require('nodemailer');
const loadConfig = require("../config/nodemailer");
const { sendConfirmationMail } = require("../services/mailService");


exports.createEpisode = async(episode) => {
    //validations
    return await episodeRepository.insertEpisode(episode);
};

exports.getAllEpisodes = async() => {
    return episodes = await episodeRepository.findAllEpisodes();
};

exports.getEpisodeById = async(id) => {
    return await episodeRepository.findEpisodeById(id);
};

exports.removeEpisode = async(id) => {
const foundEpisode = await episodeRepository.findEpisodeById(id);
    if (!foundEpisode) {
        throw new Error("This Episode doesn't exist")
    }
    return await episodeRepository.deleteEpisode(id);
};

exports.editEpisode = async(id, episodeDetails) => {
    const foundEpisode = await episodeRepository.findEpisodeById(id);
    if (!foundEpisode) {
        throw new Error("This Episode doesn't exist")
    }
    return await episodeRepository.updateEpisode(id, episodeDetails)
};