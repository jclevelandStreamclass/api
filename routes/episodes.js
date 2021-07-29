var express = require("express");
const roleValidation = require("../middlewares/roleValidation");
var router = express.Router();
const episodeService = require("../services/episodeService");


router.get("/", async (req, res, next) => {
  try {
    const episodes = await episodeService.getAllEpisodes();
    res.status(200).json(episodes);
  } catch (error) {
    next(error);
  }
});

router.get("/search:title?", async (req, res, next) => {
  try {
    const episodes = await episodeService.searchEpisodeName(req.query);
    res.status(200).json(episodes);
  } catch (error) {
    next(error);
  }
});

router.get("/private/:id", roleValidation("premium"), async (req, res, next) => {
  try {
    const { id } = req.params;
    const episode = await episodeService.getEpisodeById(id, req.user);
    res.status(200).json(episode);
  } catch (error) {
    next(error);
  }
});

router.get("/totaltime/:seriesId", async (req, res, next) => {
  try {
    const { seriesId } = req.params;
    const totaltime = await episodeService.getSumEpisodeDurationBySerieId(
      seriesId
    );
    res.status(200).json(totaltime);
  } catch (error) {
    next(error);
  }
});

router.post("/private/", roleValidation(), async (req, res, next) => {
  try {
    const episode = await episodeService.createEpisode(req.body);
    res.status(200).json(episode);
  } catch (error) {
    next(error)
  }
});

router.put("/private/:id", roleValidation(),  async (req, res, next) => {
  try {
    const { id } = req.params;
    const editedEpisdoe = await episodeService.editEpisode(id, req.body);
    res.status(200).json(editedEpisdoe);
  } catch (error) {
    next(error);
  }
});

router.delete("/private/:id", roleValidation(),  async (req, res, next) => {
  try {
    const { id } = req.params;
    const destroyedRow = await episodeService.removeEpisode(id);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
