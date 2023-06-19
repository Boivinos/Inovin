const express = require("express");

const router = express.Router();

const wineControllers = require("./controllers/wineControllers");
const commentControllers = require("./controllers/commentControllers");
const userControllers = require("./controllers/userControllers");
const selectionControllers = require("./controllers/selectionControllers");
const { hashPassword, verifyPassword } = require("./auth");

router.post(
  "/api/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);
router.post("/api/users", hashPassword, userControllers.createUser);

// router.use(verifyToken) --- THIS WILL PROTECT ROUTES BELOW, dont forget to import verifyToken line 8

router.get("/api/wines", wineControllers.browse);
router.get("/api/wines/:id", wineControllers.read);
router.get(
  "/api/wines/:id/comments",
  commentControllers.getCommentAndAuthorByWineID
);

router.post("/api/wines/:id/comments", commentControllers.postComment);
router.get("/api/selection/:id", selectionControllers.getSelectionByUser);
router.post(
  "/api/selection",
  wineControllers.browseAndPassToNext,
  selectionControllers.deleteSelection,
  selectionControllers.createSelection
);

module.exports = router;
