// /recipes/main-page
const Recipe = require("../../models/recipe");
const paginationAggregateWrapper = require("../../helpers/paginationAggregateWrapper");
const getMainPage = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const baseQuery = [
    { $group: { _id: "$category", documents: { $push: "$$ROOT" } } },
    { $project: { documents: { $slice: ["$documents", 4] } } },
  ];
  const data = await paginationAggregateWrapper(Recipe, baseQuery, page, limit);
  if (!data.length || !data[0]) {
    res.status(400);
    throw new Error("Bad Request");
  }
  const payload = data[0];
  const result = {
    data: payload?.data,
    quantity: payload?.metadata[0]?.total,
  };

  res.status(200).json({
    code: 200,
    message: "success",
    ...result,
  });
};
module.exports = getMainPage;
