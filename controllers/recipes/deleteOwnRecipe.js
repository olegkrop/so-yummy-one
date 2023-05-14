// /remove-recipe
const Recipe = require("../../models/recipe");

const deleteOwnRecipe = async (req, res, next) => {
  //   const { _id } = req.user;
  const recipeId = req.params.id;
  await Recipe.findByIdAndDelete(recipeId);

  //   const recipe = await Recipe.findById(_id);
  //   await recipe.remove();

  res.json({
    status: "success",
    code: 200,
    message: "Recipe successfully deleted",
  });
};

module.exports = deleteOwnRecipe;
