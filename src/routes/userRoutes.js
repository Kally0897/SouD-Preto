const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const authController = require("../controller/authController")

const { checkAuth } = require("../midllewares/auth")


router.get("/all",userController.allUsers);
router.get("all", userController.userByName)
router.post("/create", userController.creatUser);
router.post("/login", authController.login);
router.patch("/update/:id", checkAuth, userController.updateUser)
router.delete("/delete/:id", checkAuth, userController.deleteUser)

module.exports = router;