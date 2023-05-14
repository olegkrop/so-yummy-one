// recipes/add-recipe
const Recipe = require("../../models/recipe");
const addOwnRecipe = async (req, res) => {
  const { title, description, instructions, category, time, ingredients } =
    req.body;
  if (
    !title ||
    !description ||
    !instructions ||
    !category ||
    !time ||
    !ingredients
  ) {
    res.status(400);
    throw new Error("Please fill all the required fields");
  }

  // get id from request and change owner
  const { _id: owner } = req.user;

  const filePath = req.file.path;

  const newRecipe = await Recipe.create({
    ...req.body,
    thumb: filePath,
    owner,
  });

  res.status(201).json({
    code: 201,
    message: "success",
    data: newRecipe,
  });
};
module.exports = addOwnRecipe;
