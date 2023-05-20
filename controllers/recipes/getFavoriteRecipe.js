// /get-favorite
const Recipe = require("../../models/recipe");
const User = require("../../models/user");
const getFavoriteRecipe = async (req, res) => {
  const { _id: userId } = req.user;

  const user = await User.findById(userId);

  const favoriteRecipes = user.favorites;

  if (!favoriteRecipes) {
    res.json({
      message: "No favorites have been added yet",
    });
  }
  const result = await Recipe.find({
    _id: { $in: favoriteRecipes },
  });
  res.status(200).json({
    message: "success",
    data: result,
    quantity: favoriteRecipes.length,
  });
};
module.exports = getFavoriteRecipe;
