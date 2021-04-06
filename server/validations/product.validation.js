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
        amount: Joi.string().required(),
      }),
    }),
  },

  deleteProduct: {
    params: Joi.object({
      id: Joi.number().required(),
    }),
  },

  updateProduct: {
    params: Joi.object({
      id: Joi.number().required(),
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
