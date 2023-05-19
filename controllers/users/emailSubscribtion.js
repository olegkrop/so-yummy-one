const { RequestError, sendEmail } = require("../../helpers");
const User = require("../../models/user");

const emailSubscribtion = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(401, "Email not found");
  }

  const subscriptionWelcome = {
    to: email,
    subject: "So Yammy subscripotion confirmation",
    html: `<b>Welcome to So Yammy subscripotion!</b>`,
  };

  await sendEmail(subscriptionWelcome);

  res.json({
    message: "Subscripotion email sent successfully",
  });
};

module.exports = emailSubscribtion;
