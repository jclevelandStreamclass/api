var express = require("express");
var router = express.Router();
const sportsPlayerService = require("../services/sportsplayerService");

router.get("/", async (req, res) => {
  try {
    const sportsPlayers = await sportsPlayerService.getAllSportsPlayers();
    res.status(200).json(sportsPlayers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sportsPlayer = await sportsPlayerService.getSportsPlayer(id);
    res.status(200).json(sportsPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const sportsPlayer = await sportsPlayerService.createSportsPlayer(req.body);
    res.status(201).json(sportsPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await sportsPlayerService.removeSportsPlayer(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
