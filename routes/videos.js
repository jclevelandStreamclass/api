var express = require('express');
var router = express.Router();
const episodeService = require('../services/episodeService')
const roleValidation = require('../middlewares/roleValidation')

router.get('/:id', roleValidation('premium'), async (req, res) => {
        try {
            const { id } = req.params;
            const episode = await episodeService.getEpisodeById(id);
            res.status(200).json(episode);
        } catch (error) {
            res.status(404).json({ message: error.message })
        }

    });
module.exports = router;