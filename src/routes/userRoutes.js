const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const authController = require("../controller/authController")

const { checkAuth } = require("../midllewares/auth")


router.get("/all", checkAuth ,userController.allUsers);
/*Se possível implementar rota para pegar usuário pelo nome*/ 
router.post("/create", userController.creatUser);
router.post("/login", authController.login);
router.patch("/update", checkAuth, userController.updateUser)
router.delete("/delete", checkAuth, userController.deleteUser)

module.exports = router;