const router = require("express").Router();
const { productController } = require("../controllers")

router.get("/", productController.getAll)

router.post("/", productController.add)

router.get("/:id", productController.getById);

router.post("/:id", productController.updateById)

router.delete("/:id", productController.deleteById)

module.exports = router;