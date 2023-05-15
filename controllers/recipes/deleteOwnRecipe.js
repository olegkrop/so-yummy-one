// /remove-recipe
const Recipe = require("../../models/recipe");

const deleteOwnRecipe = async (req, res) => {
  const { id: recipeId } = req.params;
  const { _id: userId } = req.user;

  const result = await Recipe.findByIdAndRemove({
    _id: recipeId,
    owner: userId,
  });

  res.json({
    status: "success",
    code: 200,
    message: "Recipe successfully deleted",
    data: result,
  });
};

module.exports = deleteOwnRecipe;
