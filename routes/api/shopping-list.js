const express = require("express");
const { authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const ctrlShoppingList = require("../../controllers/shopping-list");
const shoppingListRouter = express.Router();

shoppingListRouter.post(
  "/add-ingredient",
  authenticate,
  ctrlWrapper(ctrlShoppingList.addToShoppingList)
);
module.exports = shoppingListRouter;
