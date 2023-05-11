const express = require("express");
const getCategoriesList = require("../../controllers/recipes/getCategoriesList");
const { authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const recipesRouter = express.Router();
recipesRouter.get(
  "/category-list",
  authenticate,
  ctrlWrapper(getCategoriesList)
);
module.exports = recipesRouter;
