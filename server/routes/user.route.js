const router = require("express").Router();
const { userController } = require("../controllers");
const { userValidation } = require("../validations")
const { validate, } = require("express-validation");

router.post("/register", validate(userValidation.addUser), userController.register)
router.post("/login", userController.login)
router.get("/:id", require("../middlewares").auth, userController.getById)
router.get("/", userController.getAll)
module.exports = router