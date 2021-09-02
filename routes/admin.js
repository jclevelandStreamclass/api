var express = require("express");
const roleValidationAdmin = require("../middlewares/roleValidationAdmin");
const roleValidation = require("../middlewares/roleValidation");
var router = express.Router();
const episodeService = require("../services/episodeService");
const categoryServices = require("../services/categoryService");
const sportsPlayerService = require("../services/sportsplayerService");
const multer = require("../middlewares/multer");

router.get("/categories/", roleValidation(), async (req, res, next) => {
  try {
    const categories = await categoryServices.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

router.post("/categories/", roleValidationAdmin(), multer.single("photo"), async (req, res, next) => {
  try {
    if (req.file) {
      req.body.photo = req.file.path;
    }
    await categoryServices.createCategory(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.put("/categories/:id",  roleValidationAdmin(), multer.single("photo"), async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.file) {
      req.body.photo = req.file.path;
    }
    await categoryServices.editCategory(req.body, id);
    res.sendStatus(204);
  } catch (error) {   
    next(error);
  }
});

router.delete("/categories/:id", roleValidationAdmin(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await categoryServices.removeCategory(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.get("/players",roleValidationAdmin(), async (req, res) => {
  try {
    const sportsPlayers = await sportsPlayerService.getAllSportsPlayers();
    res.status(200).json(sportsPlayers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/players",roleValidationAdmin(), async (req, res) => {
  try {
    if (req.file) {
      req.body.photo = req.file.path;
    }
    
    const sportsPlayer = await sportsPlayerService.createSportsPlayer(req.body);
    res.status(201).json(sportsPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/players/:id",roleValidationAdmin(),multer.single("photo"), async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🚀 ~ file: admin.js ~ line 80 ~ router.put ~ req.file", req.file)

    if (req.file) {
      req.body.photo = req.file.path;
    }
    const sportsPlayer = await sportsPlayerService.editSportsPlayer(req.body, id);
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
