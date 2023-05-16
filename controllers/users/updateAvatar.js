const User = require("../../models/user");
const cloudinary = require("cloudinary").v2;

const updateAvatar = async (req, res) => {
  const { _id: id } = req.user;
  const data = req.body;

  const { email } = data;
  const avatar = req.file;
  if (!avatar) {
    return res.status(422).json({
      code: 422,
      message: "Missing avatar in request",
    });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      code: 404,
      message: "User not found",
    });
  }

  const { secure_url: avatarURL, updated_at: updatedAt } =
    await cloudinary.uploader.upload(avatar.path);
  const { name } = await User.findByIdAndUpdate(
    id,
    {
      name: user.name,
      avatarURL,
      ...data,
    },
    { new: true }
  ); // Name and avatar updated

  res.status(200).json({ name, email, avatarURL, updatedAt });
};
module.exports = updateAvatar;
