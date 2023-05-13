const express = require("express");
const ctrlRecipes = require("../../controllers/recipes");
const { authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const recipesRouter = express.Router();
recipesRouter.get(
  "/category-list",
  authenticate,
  ctrlWrapper(ctrlRecipes.getCategoriesList)
);
recipesRouter.get(
  "/main-page",
  authenticate,
  ctrlWrapper(ctrlRecipes.getMainPage)
);
recipesRouter.get("/:id", authenticate, ctrlWrapper(ctrlRecipes.getRecipeByID));

module.exports = recipesRouter;
