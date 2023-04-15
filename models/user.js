const Joi = require("joi");
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers')

const emailRedex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
const passwRedex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,90}$/;

const userSchema = new Schema({
    password: {
        type: String,
        match: passwRedex,
        unique: true,
        required: [true, 'Set password for user'],
    },
    email: {
        type: String,
        match: emailRedex,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: ''
    },
    avatarURL: {
        type: String,
        required: true,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        default: '',
        // required: [true, 'Verify token is required'],
    },
}, { versionKey: false, timestamps: true });

userSchema.post('save', handleMongooseError)

const registerSchema = Joi.object({
    password: Joi.string().pattern(passwRedex).required(),
    email: Joi.string().pattern(emailRedex).required(),
    subscription: Joi.string().required(),
});

const emailSchema = Joi.object({
    email: Joi.string().pattern(emailRedex).required(),
})

const loginSchema = Joi.object({
    password: Joi.string().pattern(passwRedex).required(),
    email: Joi.string().pattern(emailRedex).required(),
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

const registerVal = (req, res, next) => {
    return validate(registerSchema, req.body, next, res,);
};

const loginVal = (req, res, next) => {
    return validate(loginSchema, req.body, next, res,);
};

const emailVal = (req, res, next) => {
    return validate(emailSchema, req.body, next, res,);
};

const schemas = {
    registerVal,
    emailVal,
    loginVal,

};



const User = model('user', userSchema);

module.exports = {
    User,
    schemas,
};