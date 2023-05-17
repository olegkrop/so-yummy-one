const Recipe = require("../../models/recipe");

const searchByIngredient = async (req, res) => {
  const keyword = req.params;

  const result = await Recipe.find({
    title: { $regex: keyword, $options: "i" },
  });

  res.json({
    status: 200,
    message: "success",
    data: result,
  });
};

module.exports = searchByIngredient;
