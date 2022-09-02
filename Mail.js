const Joi = require("joi");

// register validation.
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().required(),
    
  
  }).unknown();
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
