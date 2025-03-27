const express = require("express");
const { getModels, addModel } = require("../controllers/printerModelController");

const router = express.Router();

router.get("/", getModels);
router.post("/", addModel);

module.exports = router;
