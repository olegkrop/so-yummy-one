const User = require("../../models/user");

const deleteFromShoppingList = async (req, res) => {
  const { ingredientId } = req.query;
  const { user } = req;

  console.log(user._id);
  console.log(ingredientId);
  const updateUser = await User.findByIdAndUpdate(
    user._id,
    {
      $pull: {
        shoppingList: { ingredients: { $elemMatch: { id: ingredientId } } },
      },
    },
    { new: true }
  );

  res.status(200).json({
    code: 200,
    message: "Deleted",
    data: updateUser.shoppingList,
  });
};
module.exports = deleteFromShoppingList;
