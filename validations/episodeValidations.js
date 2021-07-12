const Joi = require("joi");

exports.insertEpisodeSchema = Joi.object({
    title: Joi.string().max(100),
    duration: Joi.string().regex(/^([0-1]?\d|2[0-3])(?::([0-5]?\d))?(?::([0-5]?\d))?$/),
    //TODO validates time in string in HH:MM:SS format
    description: Joi.string() ,
    photo: Joi.string(),
    video: Joi.string(),
    serieId: Joi.string(),
});

