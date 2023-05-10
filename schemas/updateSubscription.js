const Joi = require("joi");

const updateSubscription = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business"),
});

module.exports = updateSubscription;
