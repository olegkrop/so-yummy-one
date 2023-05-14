const express = require("express");
const ctrlRecipes = require("../../controllers/recipes");
const { authenticate, upload } = require("../../middlewares");
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
recipesRouter.get(
  "/id/:id",
  authenticate,
  ctrlWrapper(ctrlRecipes.getRecipeByID)
);

recipesRouter.get(
  "/:category",
  authenticate,
  ctrlWrapper(ctrlRecipes.getRecipeByCategory)
);

recipesRouter.patch(
  "/add-recipe",
  authenticate,
  upload.single("thumb"),
  ctrlWrapper(ctrlRecipes.addOwnRecipe)
);

recipesRouter.delete(
  "/remove-recipe",
  authenticate,
  ctrlWrapper(ctrlRecipes.deleteOwnRecipe)
);
module.exports = recipesRouter;
