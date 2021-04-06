const { Joi } = require("express-validation");

module.exports = {
  addProduct: {
    body: Joi.object({
      productData: Joi.object({
        price: Joi.number().required(),
        cost: Joi.number().required(),
        barcode: Joi.string().required(),
        name: Joi.string().required(),
        unit: Joi.string().required(),
        categoryId: Joi.number().required(),
        amount: Joi.string().required(),
      }),
    }),
  },

  idParam: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
  barcode: {
    params: Joi.object({
      barcode: Joi.string().required(),
    }),
  },
  updateProduct: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
    body: Joi.object({
      productData: Joi.object({
        companyId: Joi.number().required(),
        categoryId: Joi.number().required(),
        price: Joi.number().required(),
        cost: Joi.number().required(),
        barcode: Joi.string().required(),
        name: Joi.string().required(),
        unit: Joi.string().required(),
        amount: Joi.string().required(),
      }),
    }),
  },
};
