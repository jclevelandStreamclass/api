var express = require("express");
var router = express.Router();
const userService = require("../services/userService");

router.get("/activate/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await userService.activateUser(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    console.log(req.body);
    await userService.signUp(req.body);
    res.sendStatus(201);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
