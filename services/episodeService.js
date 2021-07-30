const episodeRepository = require("../repositories/episodeRepository");
const HttpError = require('../utils/httpError');
const ERRORS = require('../utils/constants');
const { insertEpisodeSchema, updateEpisodeSchema } = require('../validations/episodeValidations');
const serieRespository = require('../repositories/serieRepository');
const userRepository = require('../repositories/userRepository')

exports.createEpisode = async (episode) => {

  const { title, duration, description, photo, video } = episode;
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
  return episodes = await episodeRepository.findAllEpisodes();
};

exports.getEpisodeById = async (id, user) => {
  const foundUser = await userRepository.findUserById(user.id)
  console.log(foundUser.role)
  console.log(user.role)
  if (foundUser?.role !== 'premium' || foundUser?.role !== 'admin') {
    throw new HttpError(401, ERRORS.INVALID_AUTHORIZATION);
  }
  const foundEpisode = await episodeRepository.findEpisodeById(id);
  if (!foundEpisode) throw new HttpError(404, ERRORS.INVALID_ID)
  return foundEpisode;
};

exports.getSumEpisodeDurationBySerieId = async (searchSerieId) => {
  const foundSerie = await serieRespository.findSerieById(searchSerieId);
  if (!foundSerie) throw new HttpError(404, ERRORS.INVALID_SERIE)
  const totaltime = await episodeRepository.findSumDurationEpisodes(searchSerieId);
  return totaltime;
};

exports.searchEpisodeName = async (filter) => {
  return await episodeRepository.searchEpisode(filter)
};

exports.removeEpisode = async (id) => {
  const foundEpisode = await episodeRepository.findEpisodeById(id);
  if (!foundEpisode) throw new HttpError(404, ERRORS.INVALID_EPISODE);
  return await episodeRepository.deleteEpisode(id);
};

exports.editEpisode = async (id, episodeDetails) => {
  const foundEpisode = await episodeRepository.findEpisodeById(id);
  if (!foundEpisode) {
    throw new HttpError(404, ERRORS.INVALID_EPISODE);
  };
  try {
    await updateEpisodeSchema.validateAsync(episodeDetails);

  } catch (error) {
    throw new HttpError(400, ERRORS.INVALID_DATA)
  };
  return await episodeRepository.updateEpisode(id, episodeDetails);
};
