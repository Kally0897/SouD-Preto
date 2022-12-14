const express = require("express");
const router = express.Router();

const lojaController = require("../controller/lojaController");

const { checkAuth } = require("../midllewares/auth")


router.get("/all", lojaController.showLoja);
router.get("/all/:id", lojaController.showLojaId);
/*Se possível implementar rota para pegar Loja pelo nome*/ 
router.post("/create", checkAuth , lojaController.createLoja);
router.patch("/update", checkAuth, lojaController.replaceLoja)
router.delete("/delete", checkAuth, lojaController.deleteLoja)

module.exports = router;