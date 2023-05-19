const express = require("express");
// const { authenticate } = require("../../middlewares");
// const { ctrlWrapper } = require("../../helpers");

const shoppingListRouter = express.Router();

// shoppingListRouter.post(
//   "/add-ingredient/:id",
//   authenticate,
//   ctrlWrapper(ctrlRecipes.addFavoriteRecipe)
// );
module.exports = shoppingListRouter;
