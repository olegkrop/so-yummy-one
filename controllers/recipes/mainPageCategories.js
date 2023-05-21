// /recipes/main-page

const Recipe = require("../../models/recipe");
const paginationWrapper = require("../../helpers/paginationWrapper");

const getMainPage = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const result = await paginationWrapper(
    Recipe.aggregate([
      { $group: { _id: "$category", documents: { $push: "$$ROOT" } } },
      { $project: { documents: { $slice: ["$documents", 4] } } },
    ]),
    page,
    limit
  );
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
