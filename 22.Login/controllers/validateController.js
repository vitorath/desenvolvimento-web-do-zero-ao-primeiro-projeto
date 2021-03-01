const Joi = require('@hapi/joi');

const validateController = {

  register: function (data) {
    const schema = Joi.object({
      name: Joi.string().required().min(3).max(50),
      email: Joi.string().required().min(3).max(100),
      password: Joi.string().required().min(6).max(50),
    });

    return schema.validate(data);
  },
  login: function (data) {
    const schema = Joi.object({
      email: Joi.string().required().min(3).max(100),
      password: Joi.string().required().min(6).max(50),
    });

    return schema.validate(data);
  }
}

module.exports = validateController;
