const User = require("../../models/user");

const getCurrent = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOne({ email });

  res.json({
    user: {
      email,
      name: user.name,
      avatar: user.avatarURL,
    },
  });
};

module.exports = getCurrent;
