const express = require("express");

const router = express.Router();
const categoryServices = require("../services/categoryService");

router.get("/all", async (req, res, next)=>{
    try {
        const categories = await categoryServices.getAllCategories();
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next)=>{
    try {
        const{id}=req.params;
        const category = await categoryServices.getCategory(id);
    } catch (error) {
        next(error);
    }
});

router.post("/", async(req, res, next)=>{
    try {
        await categoryServices.createCategory(req.body);
        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async(req, res, next)=>{
    try {
        const {id}=req.params;
        await categoryServices.editCategory(req.user, req.body, id);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await categoryServices.removeCategory(id);
        res.sendStatus(204);
    } catch (error) {
        next(error)    
    }
});
module.exports = router;