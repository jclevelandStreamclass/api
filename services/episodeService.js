const episodeRepository = require('../repositories/episodeRepository');
const nodemailer = require('nodemailer');
const loadConfig = require("../config/nodemailer");
const { sendConfirmationMail } = require("../services/mailService");

exports.createEpisode = async(episode) => {
    //validations
    return await episodeRepository.insertEpisode(episode);
};

exports.getAllEpisodes = async() => {
    const episodes = await episodeRepository.findAllEpisodes();
    const email = "rubenigue.crack@gmail.com"
    const emailMessage = `< !DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Transitional//EN” “https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <html xmlns=”https://www.w3.org/1999/xhtml”>`
    const emailSubjectLine = "test"


    await sendConfirmationMail(email, emailMessage, emailSubjectLine);
    return episodes;
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