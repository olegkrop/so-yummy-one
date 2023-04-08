const Joi = require("joi");

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^(\(\d{3}\)\s\d{3}-\d{4})$/).required(),
    favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

const validate = (schema, obj, next, res) => {
    const { error } = schema.validate(obj);
    if (error) {
        const [{ message }] = error.details;
        console.log(error);
        return res.json({
            status: "failure",
            code: 400,
            message: `Field ${message.replace(/"/g, "")}`,
        });
    }
    next();
};

const favorite = (req, res, next) => {
    return validate(updateFavoriteSchema, req.body, next, res,);
};
const contact = (req, res, next) => {
    return validate(schema, req.body, next, res,);
};

module.exports = { favorite, contact }