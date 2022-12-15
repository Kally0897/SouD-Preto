const express = require("express");
const router = express.Router();

const reservaController = require("../controller/reservaController");

const { checkAuth } = require("../midllewares/auth")


router.get("/all", checkAuth,reservaController.allReserves)
router.post("/create", checkAuth , reservaController.createReserve);
router.patch("/update", checkAuth, reservaController.replaceReserves)
router.delete("/delete/:id", checkAuth, reservaController.deleteReserve)

module.exports = router;