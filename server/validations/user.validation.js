const { Joi } = require("express-validation");

module.exports = {
  addUser: {
    body: Joi.object({
      userData: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        companyName: Joi.string().required(),
        adress: Joi.string().required(),
        telephone: Joi.string().required(),
        password: Joi.string().required(),
        image: Joi.string().required(),
      }),
    }),
  },

  // deleteUser: {
  //   params: Joi.object({
  //     id: Joi.number().required(),
  //   }),
  // },

  // updateUser: {
  //   params: Joi.object({
  //     id: Joi.number().required(),
  //   }),
  //   body: Joi.object({
  //     userData: Joi.object({
  //       name: Joi.string().required(),
  //       email: Joi.string().required(),
  //       companyName: Joi.string().required(),
  //       adress: Joi.string().required(),
  //       telephone: Joi.string().required(),
  //       password: Joi.string().required(),
  //       image: Joi.string().required(),
  //     }),
  //   }),
  // },
};
