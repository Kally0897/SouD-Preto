const express = require("express");
const router = express.Router();

const reservaController = require("../controller/reservaController");

const { checkAuth } = require("../midllewares/auth")


router.get("/all", checkAuth,reservaController.allReserves)
router.get("/all", reservaController.showReservaNome)
router.post("/create", checkAuth , reservaController.createReserve);
router.patch("/update/:id", checkAuth, reservaController.replaceReserves)
router.delete("/delete/:id", checkAuth, reservaController.deleteReserve)

module.exports = router;