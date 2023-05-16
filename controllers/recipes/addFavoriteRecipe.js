const Recipe = require("../../models/recipe");
const User = require("../../models/user");
const addFavoriteRecipe = async (req, res) => {
  //   const { _id: userId } = req.user;
  const { _id: recipeId } = req.body;
  //   if (!recipeId) {
  //     return res.status(422).json({
  //       code: 422,
  //       message: "Missing recipe ID in request body",
  //     });
  //   }

  const recipe = await Recipe.findById(recipeId);
  //   if (!recipe) {
  //     return res.status(404).json({
  //       code: 404,
  //       message: "Recipe not found",
  //     });
  //   }

  // Оновлення списку улюблених рецептів користувача
  const userUpdate = await User.findByIdAndUpdate(req.user._id, {
    $pull: { favorites: recipeId },
  });
  // Відправлення відповіді з останнім доданим рецептом
  res.status(201).json({
    code: 201,
    message: "Added to favorite",
    // Виводимо останній доданий рецепт
    data: recipe,
    userUpdate,
  });
};
module.exports = addFavoriteRecipe;
