const express = require("express");

const router = express.Router();

const wineControllers = require("./controllers/wineControllers");
const commentControllers = require("./controllers/commentControllers");

router.get("/api/wines", wineControllers.browse);
router.get("/api/wines/:id", wineControllers.read);
router.get(
  "/api/wine/:id/comments",
  commentControllers.getCommentAndAuthorByWineID
);

module.exports = router;
