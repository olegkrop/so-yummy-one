// const Recipe = require("../../models/recipe");
const User = require("../../models/user");

const getFavoritesRecipe = async (req, res) => {
  const { _id: userId } = req.user;

  const user = await User.findById(userId).populate({
    path: "favorites",
    model: "Recipe",
  });

  const favoriteRecipes = user.favorites;

  if (!favoriteRecipes) {
    res.json({
      message: "No favorites have been added yet",
    });
  }

  res.status(200).json({
    code: 200,
    message: "success",
    data: favoriteRecipes,
    quantity: favoriteRecipes.length,
  });
};
module.exports = getFavoritesRecipe;
