const express = require("express");
const ctrlRecipes = require("../../controllers/recipes");
const { authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const favoriteRouter = express.Router();

favoriteRouter.get(
  "/get-favorite",
  authenticate,
  ctrlWrapper(ctrlRecipes.getFavoriteRecipe)
);

favoriteRouter.post(
  "/add-favorite/:id",
  authenticate,
  ctrlWrapper(ctrlRecipes.addFavoriteRecipe)
);

module.exports = favoriteRouter;
