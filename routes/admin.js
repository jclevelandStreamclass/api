var express = require("express");
const roleValidationAdmin = require("../middlewares/roleValidationAdmin");
var router = express.Router();
const episodeService = require("../services/episodeService");
const categoryServices = require("../services/categoryService");
const sportsPlayerService = require("../services/sportsplayerService");

router.get("/categories/", roleValidationAdmin(), async (req, res, next) => {
  try {
    const categories = await categoryServices.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});


router.post("/categories/", roleValidationAdmin(), async (req, res, next) => {
  try {
    await categoryServices.createCategory(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.put("/categories/:id", roleValidation(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await categoryServices.editCategory(req.body, id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.delete("/categories/:id", roleValidation(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await categoryServices.removeCategory(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

//player
router.get("/players", async (req, res) => {
  try {
    const sportsPlayers = await sportsPlayerService.getAllSportsPlayers();
    res.status(200).json(sportsPlayers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.post("/players", async (req, res) => {
  try {
    const sportsPlayer = await sportsPlayerService.createSportsPlayer(req.body);
    res.status(201).json(sportsPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.put("/players/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sportsPlayer = await sportsPlayerService.editSportsPlayer(
      req.body,
      id
    );
    res.status(200).json(sportsPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/players/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await sportsPlayerService.removeSportsPlayer(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
