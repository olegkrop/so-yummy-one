const express = require("express");
const ctrlIngredients = require("../../controllers/ingredients");
const { authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const ingredientRouter = express.Router();

ingredientRouter.get(
  "/list",
  authenticate,
  ctrlWrapper(ctrlIngredients.getIngredientList)
);
ingredientRouter.get(
  "/search/ingredient",
  authenticate,
  ctrlWrapper(ctrlIngredients.searchByIngredient)
);
module.exports = ingredientRouter;
