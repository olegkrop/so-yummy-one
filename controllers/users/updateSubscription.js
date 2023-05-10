const User = require("../../models/user");

const updateSubscription = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await User.findByIdAndUpdate(owner, req.body, {
    new: true,
  });

  res.status(200).json(result);
};

module.exports = updateSubscription;
