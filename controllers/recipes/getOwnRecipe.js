// /own-recipes
const Recipe = require("../../models/recipe");

const getOwnRecipe = async (req, res) => {
  const { _id: userId } = req.user;
  //   const recipeId = req.params.id;

  const result = await Recipe.find({ owner: userId });
  //   if (!result) {
  //     res.status(400);
  //     throw new Error(" No recipes found");
  //   }

  res.json({
    status: "success",
    code: 200,
    message: "My recipes",
    data: result,
    quantity: result.length,
  });
};
module.exports = getOwnRecipe;
