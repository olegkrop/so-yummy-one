const Recipe = require("../../models/recipe");

const getAll = async (req, res) => {
  const result = await Recipe.find();

  res.json({
    status: 200,
    message: "success",
    data: result,
  });
};
module.exports = getAll;
