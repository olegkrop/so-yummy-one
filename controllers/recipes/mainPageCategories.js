// /recipes/main-page

const Recipe = require("../../models/recipe");

const getMainPage = async (req, res) => {
  const result = await Recipe.aggregate([
    { $group: { _id: "$category", documents: { $push: "$$ROOT" } } },
    { $project: { documents: { $slice: ["$documents", 4] } } },
  ]);
  if (!result) {
    res.status(400);
    throw new Error("Bad Request");
  }
  res.status(200).json({
    code: 200,
    message: "success",
    data: result,
    quantity: result.length,
  });
};
module.exports = getMainPage;
