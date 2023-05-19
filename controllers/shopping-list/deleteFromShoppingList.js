const User = require("../../models/user");

const deleteFromShoppingList = async (req, res) => {
  const { ingredientId } = req.query;
  const { user } = req;
  //   console.log(user.shoppingList[4].ingredients);

  //   const ingredientIndex = user.shoppingList.ingredients.findIndex(
  //     (ingredient) => ingredient.id === ingredientId
  //   );

  //   if (ingredientIndex === -1) {
  //     throw new Error(`Ingredient not found in recipe.`);
  //   }

  //   user.shoppingList.ingredients.splice(ingredientIndex, 1);
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
  //   console.log(updateUser);
  //   await user.save();

  res.status(200).json({
    code: 200,
    message: "Deleted",
    data: updateUser.shoppingList,
  });
};
module.exports = deleteFromShoppingList;
