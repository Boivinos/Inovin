const express = require("express");

const router = express.Router();

const wineControllers = require("./controllers/wineControllers");
const commentControllers = require("./controllers/commentControllers");
const userControllers = require("./controllers/userControllers");
const { hashPassword, verifyPassword } = require("./auth");

router.get("/api/wines", wineControllers.browse);
router.get("/api/wines/:id", wineControllers.read);
router.get(
  "/api/wines/:id/comments",
  commentControllers.getCommentAndAuthorByWineID
);
router.post("/api/wines/:id/comments", commentControllers.postComment);
router.post("/api/users", hashPassword, userControllers.createUser);
router.post(
  "/api/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

module.exports = router;
