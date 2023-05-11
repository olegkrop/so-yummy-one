const express = require("express");
const ctrlCategories = require("../../controllers/recipes");
const { authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const recipesRouter = express.Router();
recipesRouter.get(
  "/category-list",
  authenticate,
  ctrlWrapper(ctrlCategories.getCategoriesList)
);
recipesRouter.get(
  "/main-page",
  authenticate,
  ctrlWrapper(ctrlCategories.getMainPage)
);

module.exports = recipesRouter;
