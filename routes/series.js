var express = require("express");
const roleValidation = require("../middlewares/roleValidation");
var router = express.Router();
const serieService = require("../services/serieService");

// GET ALL
router.get("/", async (req, res, next) => {
  try {
    const series = await serieService.getAllSeries();
    res.status(200).json(series);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/search:title?", async (req, res, next)=> {
  try {
    const series = await serieService.searchSerieName(req.query);
    res.status(200).json(series)
  } catch (error) {
    next(error)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const serie = await serieService.getSerieById(id);
    res.status(200).json(serie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST
//router.post("/", roleValidation("user"), async (req, res, next) => {
  router.post("/",  async (req, res, next) => {
  try {
    const serie = await serieService.createSerie(req.body);
    res.status(200).json(serie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const serie = await serieService.editSerie(id, req.body);
    res.status(200).json(serie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await serieService.removeSerie(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
