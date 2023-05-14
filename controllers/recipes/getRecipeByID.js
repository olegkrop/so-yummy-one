// /recipes/id/:id

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Recipe = require("../../models/recipe");

const getRecipeById = async (req, res) => {
  const { id } = req.params;

  const recipe = await Recipe.aggregate([
    {
      $match: {
        _id: ObjectId.createFromHexString(id),
      },
    },
    {
      $lookup: {
        from: "ingredients",
        localField: "ingredients.id",
        foreignField: "_id",
        as: "ingr_nfo",
      },
    },
    {
      $set: {
        ingredients: {
          $map: {
            input: "$ingredients",
            in: {
              $mergeObjects: [
                "$$this",
                {
                  $arrayElemAt: [
                    "$ingr_nfo",
                    {
                      $indexOfArray: ["$ingr_nfo._id", "$$this.id"],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    {
      $unset: ["ingr_nfo", "ingredients.id"],
    },
  ]);
  res.json({
    status: 200,
    message: "success",
    result: recipe,
  });
};
module.exports = getRecipeById;
