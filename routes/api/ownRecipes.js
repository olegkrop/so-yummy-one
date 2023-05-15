const express = require("express");
const ctrlRecipes = require("../../controllers/recipes");
const { authenticate, upload } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const ownRecipesRouter = express.Router();

ownRecipesRouter.patch(
  "/add-recipe",
  authenticate,
  upload.single("thumb"),
  ctrlWrapper(ctrlRecipes.addOwnRecipe)
);

ownRecipesRouter.delete(
  "/remove-recipe",
  authenticate,
  ctrlWrapper(ctrlRecipes.deleteOwnRecipe)
);
ownRecipesRouter.get(
  "/own-recipes",
  authenticate,
  ctrlWrapper(ctrlRecipes.getOwnRecipe)
);
module.exports = ownRecipesRouter;
