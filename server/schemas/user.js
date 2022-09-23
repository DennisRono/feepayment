const Joi = require('@hapi/joi');

const registerDataSchema = Joi.object({
    regno: Joi.string().uppercase().required(),
    phone: Joi.string().min(10).max(10),
    password: Joi.string().min(8).required().strict(),
    cpassword: Joi.string().valid(Joi.ref('password')).required().strict()
});

const loginDataSchema = Joi.object({
    regno: Joi.string().uppercase().required(),
    password: Joi.string().min(8).required().strict(),
});

module.exports = { registerDataSchema, loginDataSchema };