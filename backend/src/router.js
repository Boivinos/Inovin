const express = require("express");

const router = express.Router();

const wineControllers = require("./controllers/wineControllers");
const commentControllers = require("./controllers/commentControllers");
const userControllers = require("./controllers/userControllers");
const selectionControllers = require("./controllers/selectionControllers");
const favoriteControllers = require("./controllers/favoriteController");
const noteControllers = require("./controllers/noteControllers");
const { hashPassword, verifyPassword } = require("./auth");

router.post(
  "/api/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);
router.post(
  "/api/users",
  hashPassword,
  userControllers.createUser,
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

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
router.post("/api/wines/:id/favorites", favoriteControllers.createUserFavorite);
router.delete("/api/wines/:id/favorites", favoriteControllers.destroy);
router.post("/api/wines/checkfavorite", favoriteControllers.getFavorite);
router.get("/api/:id/favorites", favoriteControllers.getAllFavorite);
router.post(
  "/api/usernotes",
  noteControllers.destroy,
  noteControllers.postNote
);
router.get("/api/:id/favoritesandnotes", noteControllers.getAllWineNotes);

router.get("/api/users", userControllers.getAllUsers);
router.get("/api/users/:id", userControllers.getUsersbyId);

module.exports = router;
