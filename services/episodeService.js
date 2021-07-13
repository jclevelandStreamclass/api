const episodeRepository = require("../repositories/episodeRepository");
const nodemailer = require("nodemailer");
const loadConfig = require("../config/nodemailer");
const { sendConfirmationMail } = require("../services/mailService");
const HttpError = require('../utils/httpError');
const ERRORS = require('../utils/constants');
const { insertEpisodeSchema } = require('../validations/episodeValidations');


exports.createEpisode = async (episode) => {
    
    const { title, duration, description, photo, video } = episode;
    console.log(video)
    if (!title || !duration || !description || !photo || !video) {
        throw new HttpError(400, ERRORS.INVALID_DATA)
    }
    try {
        await insertEpisodeSchema.validateAsync(episode);
       
    } catch (error) {
        throw new HttpError(400, ERRORS.INVALID_DATA)
    }
    return await episodeRepository.insertEpisode(episode);
};

exports.getAllEpisodes = async () => {
  return (episodes = await episodeRepository.findAllEpisodes());
};

exports.getEpisodeById = async (id) => {
  return await episodeRepository.findEpisodeById(id);
};

exports.removeEpisode = async (id) => {
  const foundEpisode = await episodeRepository.findEpisodeById(id);
  if (!foundEpisode) {
    throw new Error("This Episode doesn't exist");
  }
  return await episodeRepository.deleteEpisode(id);
};

exports.editEpisode = async (id, episodeDetails) => {
  const foundEpisode = await episodeRepository.findEpisodeById(id);
  if (!foundEpisode) {
    throw new Error("This Episode doesn't exist");
  }
  return await episodeRepository.updateEpisode(id, episodeDetails);
};
