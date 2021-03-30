const router = require("express").Router();
const { productController } = require("../controllers")
const {auth} = require("../middlewares");

//router.use(auth);

router.get("/",auth, productController.getAll)

router.post("/", productController.add)

router.get("/:id", productController.getById);

router.post("/:id", productController.updateById)

router.delete("/:id", productController.deleteById)

module.exports = router;