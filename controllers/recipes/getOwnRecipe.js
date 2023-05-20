// /own-recipes
const Recipe = require("../../models/recipe");

const getOwnRecipe = async (req, res) => {
  const { _id: userId } = req.user;

  const result = await Recipe.find({ owner: userId });

  res.json({
    status: "success",
    code: 200,
    message: "My recipes",
    data: result,
    quantity: result.length,
  });
};
module.exports = getOwnRecipe;
