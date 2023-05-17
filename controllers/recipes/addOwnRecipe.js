// add-recipe
const Recipe = require("../../models/recipe");
const cloudinary = require("cloudinary").v2;

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
  const { path: filePath } = req.file;

  const { secure_url: thumb } = await cloudinary.uploader.upload(filePath);

  const newRecipe = await Recipe.create({
    ...req.body,
    thumb,
    owner,
  });

  res.status(200).json({
    message: "success",
    data: newRecipe,
  });
};
module.exports = addOwnRecipe;
