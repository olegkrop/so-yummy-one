// /search
// const Ingredient = require("../../models/ingredient");
// const mongoose = require("mongoose");

// const ObjectId = mongoose.Types.ObjectId;
// const searchByIngredient = async (req, res) => {
//   const result = Ingredient.aggregate([
//     {
//       $lookup: {
//         from: "recipes",
//         pipeline: [
//           {
//             $match: {
//               ingredients: {
//                 $elemMatch: {
//                   id: ObjectId.createFromHexString(id),
//                 },
//               },
//             },
//           },
//           {
//             $project: {
//               recipes: {
//                 _id: "$_id",
//                 title: "$title",
//                 thumb: "$thumb",
//               },
//             },
//           },
//           {
//             $replaceRoot: {
//               newRoot: "$recipes",
//             },
//           },
//         ],
//         as: "recipes",
//       },
//     },
//     {
//       $match: {
//         _id: ObjectId.createFromHexString(id),
//       },
//     },
//   ]);
//   res.json({
//     status: 200,
//     message: "success",
//     data: result,
//   });
// };

// module.exports = searchByIngredient;
