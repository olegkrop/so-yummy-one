const Joi = require("joi");

const emailRegexp =
  /^[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9][A-Za-z0-9.-]+\.[A-Za-z]{1,}$/;

const loginSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegexp).messages({
    "string.pattern.base": "Email is not valid",
  }),
  password: Joi.string().min(6).required(),
});

module.exports = loginSchema;
