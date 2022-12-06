const express = require("express");
const router = express.Router();

const controller = require("../controller/userController");
const authController = require("../controller/authController")

const { checkAuth } = require("../midllewares/auth")


router.get("/all", checkAuth ,controller.getAll);
/*Se possível implementar rota para pegar usuário pelo nome*/ 
router.post("/create", controller.creatUser);
router.post("/login", authController.login);
router.patch("/update", checkAuth, controller.updateUser)
router.delete("/delete", checkAuth, controller.deleteUser)

module.exports = router;