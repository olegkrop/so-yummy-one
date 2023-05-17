const getCategoriesList = require("./getCategoriesList");
const getMainPage = require("./mainPageCategories");
const getRecipeByID = require("./getRecipeByID");
const getRecipeByCategory = require("./getRecipeByCategory");
const addOwnRecipe = require("./addOwnRecipe");
const deleteOwnRecipe = require("./deleteOwnRecipe");
const getOwnRecipe = require("./getOwnRecipe");
const getAll = require("./getAll");
const searchByIngredient = require("./searchByIngredient");

module.exports = {
  getCategoriesList,
  getMainPage,
  getRecipeByID,
  getRecipeByCategory,
  addOwnRecipe,
  deleteOwnRecipe,
  getOwnRecipe,
  getAll,
  searchByIngredient,
};
