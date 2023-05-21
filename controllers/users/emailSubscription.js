const { RequestError, sendEmail } = require("../../helpers");
const User = require("../../models/user");

const emailSubscription = async (req, res) => {
  const { email } = req.query;
  const user = await User.findOne({ email });
  console.log(user);
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
    message: "Subscription email sent successfully",
  });
};

module.exports = emailSubscription;
