const express = require("express");
const roleValidation = require("../middlewares/roleValidation");
const router = express.Router();
const categoryServices = require("../services/categoryService");

router.get("/all", async (req, res, next) => {
  try {
    const categories = await categoryServices.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

router.get("/latest/Update", async (req, res, next) => {
  try {
    const categories = await categoryServices.getAllCategoriesLastUpdate();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/search:name?", async (req, res, next) => {
  try {
    const categories = await categoryServices.searchCategoryName(req.query);
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await categoryServices.getCategory(id);
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
});

router.post("/private/", roleValidation(), async (req, res, next) => {
  try {
    await categoryServices.createCategory(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.put("/private/:id", roleValidation(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await categoryServices.editCategory(req.body, id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.delete("/private/:id", roleValidation(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await categoryServices.removeCategory(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
