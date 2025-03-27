const express = require("express");
const { getPrinters, addPrinter } = require("../controllers/printerController");

const router = express.Router();

router.get("/", getPrinters);
router.post("/", addPrinter);

module.exports = router;
