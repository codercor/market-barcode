const { Joi } = require("express-validation")

module.exports = {
    addProduct: {
        body: Joi.object({
            productData: Joi.object()
        })
    }

};
