const User = require("../../models/user");

const addToShoppingList = async (req, res) => {
  const { _id: userId } = req.user;

  // отримуємо інгредієнт від користувача
  const { _id, measure } = req.body;
  const ingredient = { _id, measure };

  // Перевіряємо чи передані всі дані
  if (!_id || !measure) {
    res.status(400);
    throw new Error("Controller: Please provide all required fields");
  }

  // Оновлюємо користувача
  // якщо потрібно щоб id не могли дублюватись використовуємо $addToSet: замість $push:
  const result = await User.findByIdAndUpdate(
    userId,
    { $addToSet: { shoppingList: ingredient } },
    { new: true }
  );

  // Якщо не вдалось записати викидаємо помилку
  if (!result) {
    res.status(400);
    throw new Error("Bad Request");
  }

  // Якщо вдалося записати повертаємо результат
  res.status(200).json({
    code: 200,
    message: "success",
    data: result.shoppingList,
  });
};
module.exports = addToShoppingList;
