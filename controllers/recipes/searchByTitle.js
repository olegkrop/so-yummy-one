const Recipe = require("../../models/recipe");

const searchByTitle = async (req, res) => {
  const { keyword } = req.query;
  const result = await Recipe.find({
    title: { $regex: keyword, $options: "i" },
  });

  res.json({
    status: 200,
    message: "success",
    data: result,
  });
};

module.exports = searchByTitle;
