const router = require("express").Router();
const { productController } = require("../controllers")
const { auth } = require("../middlewares");

const { validate, } = require("express-validation");

const { productValidation } = require("../validations")

router.use(auth);



router.get("/", productController.getAll)

router.post("/", validate(productValidation.addProduct), productController.add)

router.get("/:id", productController.getById);

router.post("/:id", productController.updateById)

router.delete("/:id", productController.deleteById)

module.exports = router;