const express = require("express");
const router = express.Router();

const cabeloController = require("../controller/cabeloController");

const { checkAuth } = require("../midllewares/auth")


router.get("/all", cabeloController.showCabelo); 
router.post("/create", cabeloController.createCabelo);
router.put("/update/:id", checkAuth, cabeloController.adjusteCabelo)

module.exports = router;