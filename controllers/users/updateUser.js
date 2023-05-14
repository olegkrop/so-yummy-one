// /user-info
const User = require("../../models/user");

const updateUser = async (req, res) => {
  const { _id: id } = req.user;

  const data = req.body;

  if (data.email) {
    const { email } = data;

    const user = await User.findOne({ email });

    await User.findByIdAndUpdate(id, {
      name: user.name,
    });

    res.status(200).json({
      message: "Name updated",
    });
    return;
  }

  const { name, email, avatarURL, updatedAt } = await User.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  );

  res.status(200).json({ name, email, avatarURL, updatedAt });
};

module.exports = updateUser;
