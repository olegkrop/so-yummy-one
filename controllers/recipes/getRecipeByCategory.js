// recipes/:category
const Recipe = require("../../models/recipe");

const getRecipeByCategory = async (req, res) => {
  const category = req.params;
  const data = await Recipe.aggregate([
    { $match: { category } },
    { $limit: 8 },
  ]);
  res.json({
    status: 200,
    message: "success",
    result: data,
  });
};
module.exports = getRecipeByCategory;
