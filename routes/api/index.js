const authRouter = require("./auth");
const recipesRouter = require("./recipes");
const ownRecipes = require("./ownRecipes");
const favoriteRouter = require("./favorite");

module.exports = {
  authRouter,
  recipesRouter,
  ownRecipes,
  favoriteRouter,
};
