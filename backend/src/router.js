const express = require("express");

const router = express.Router();

const wineControllers = require("./controllers/wineControllers");
const commentControllers = require("./controllers/commentControllers");
const userControllers = require("./controllers/userControllers");
const selectionControllers = require("./controllers/selectionControllers");
const favoriteControllers = require("./controllers/favoriteController");
const noteControllers = require("./controllers/noteControllers");
const { hashPassword, verifyPassword, verifyToken } = require("./auth");

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

// --- USER PROTECTED ROUTES BELOW -----
router.use(verifyToken);

router.get("/api/wines", wineControllers.browse);
router.get("/api/wines/:id", wineControllers.read);
router.put("/api/wines/:id", wineControllers.edit);
router.delete("/api/wines/:id", wineControllers.destroy);
router.post("/api/wines", wineControllers.addWine);
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
router.delete("/api/users/:id", userControllers.destroy);
router.put("/api/users/:id", userControllers.editUser);

module.exports = router;
