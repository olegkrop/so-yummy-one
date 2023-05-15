// /remove-recipe
const Recipe = require("../../models/recipe");

const deleteOwnRecipe = async (req, res, next) => {
  const recipeId = req.params.id;
  await Recipe.findByIdAndDelete(recipeId);

  res.json({
    status: "success",
    code: 200,
    message: "Recipe successfully deleted",
  });
};

module.exports = deleteOwnRecipe;
