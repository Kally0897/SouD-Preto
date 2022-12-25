const express = require("express");
const router = express.Router();

const salaoController = require("../controller/salaoController");

const { checkAuth } = require("../midllewares/auth")


router.get("/all", salaoController.showSalao);
router.get("/all", salaoController.showSalaoNome);
router.get("/especialidades", salaoController.showSalaoEspecialidadesPorNome);
router.get("/all/:id", salaoController.showSalaoId); 
router.post("/create", checkAuth , salaoController.createSalao);
router.patch("/update:id", checkAuth, salaoController.replaceSalao)
router.delete("/delete:id", checkAuth, salaoController.deleteSalao)

module.exports = router;