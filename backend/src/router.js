const express = require("express");

const router = express.Router();

const wineControllers = require("./controllers/wineControllers");

router.get("/api/wines", wineControllers.browse);

module.exports = router;
