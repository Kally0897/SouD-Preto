const express = require("express");
const router = express.Router();

const salaoController = require("../controller/salaoController");

const { checkAuth } = require("../midllewares/auth")


router.get("/all", salaoController.showSalao);
router.get("/all/:id", salaoController.showSalaoId)
/*Se possível implementar rota para pegar Loja pelo nome*/ 
router.post("/create", checkAuth , salaoController.createSalao);
router.patch("/update", checkAuth, salaoController.replaceSalao)
router.delete("/delete", checkAuth, salaoController.deleteSalao)

module.exports = router;