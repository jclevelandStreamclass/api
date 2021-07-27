const Joi = require("joi");

exports.insertEpisodeSchema = Joi.object({
    title: Joi.string().max(100).required(),
    number: Joi.number().required(),
    duration: Joi.string().regex(/^([0-1]?\d|2[0-3])(?::([0-5]?\d))?(?::([0-5]?\d))?$/).required(),
    // validates time in string in HH:MM:SS format
    description: Joi.string(),
    photo: Joi.string().required(),
    video: Joi.string().required(),
    serieId: Joi.string().required(),
});

exports.updateEpisodeSchema = Joi.object({
    title: Joi.string().max(100),
    number: Joi.number(),
    duration: Joi.string().regex(/^([0-1]?\d|2[0-3])(?::([0-5]?\d))?(?::([0-5]?\d))?$/),
    // validates time in string in HH:MM:SS format
    description: Joi.string(),
    photo: Joi.string(),
    video: Joi.string(),
    serieId: Joi.string(),
});

