const express = require("express");
const router = express.Router();

const lojaController = require("../controller/lojaController");

const { checkAuth } = require("../midllewares/auth")


router.get("/all", lojaController.showLoja);
router.get("/all", lojaController.showLojaNome);
router.get("/all/:id", lojaController.showLojaId);
router.post("/create", checkAuth , lojaController.createLoja);
router.patch("/update/:id", checkAuth, lojaController.replaceLoja)
router.delete("/delete/:id", checkAuth, lojaController.deleteLoja)

module.exports = router;