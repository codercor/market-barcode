const router = require("express").Router();
const { productController } = require("../controllers")
const { auth } = require("../middlewares");

const { validate } = require("express-validation");

const { productValidation } = require("../validations")

router.use(auth);



router.get("/", productController.getAll)

router.post("/", validate(productValidation.addProduct), productController.add)

router.get("/barcode/:barcode", validate(productValidation.barcode), productController.getByBarcode);

router.get("/:id", validate(productValidation.idParam), productController.getById);

router.post("/:id", validate(productValidation.updateProduct), productController.updateById)

router.delete("/:id", validate(productValidation.idParam), productController.deleteById)



module.exports = router;