const Recipe = require("../../models/recipe");

const searchByIngredient = async (req, res) => {
  const { title } = req.params;

  // const result = await Recipe.find({
  // title: { $regex: keyword, $options: "i" },

  // const { title } = req.params;

  const result = await Recipe.find({ title: `${title}` });
  res.json({
    status: 200,
    message: "success",
    data: result,

    // title: { keyword },
  });
};

module.exports = searchByIngredient;
