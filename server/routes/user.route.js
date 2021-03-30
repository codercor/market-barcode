const router = require("express").Router();
const {userController} = require("../controllers");


router.post("/register",userController.register)
router.post("/login", userController.login)
router.get("/:id", userController.getById)

module.exports = router