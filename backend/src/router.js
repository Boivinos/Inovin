const express = require("express");

const router = express.Router();
const fs = require("fs");

// Ajout de multer
const multer = require("multer");

// Ajout de uuid
const { v4: uuidv4 } = require("uuid");

// On définit la destination de stockage de nos fichiers
const upload = multer({ dest: "./public/uploads/" });

// route POST pour recevoir un fichier dont le nom est "avatar"
router.post("/api/wineimage", upload.single("wineimage"), (req, res) => {
  // On récupère le nom du fichier
  const { originalname } = req.file;

  // On récupère le nom du fichier
  const { filename } = req.file;

  // On utilise la fonction rename de fs pour renommer le fichier
  fs.rename(
    `./public/uploads/${filename}`,
    `./public/uploads/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) {
        console.error("Error during rename operation:", err);
        throw err;
      }
      console.info("File renamed successfully");
      res.send("File uploaded");
    }
  );
});

const wineControllers = require("./controllers/wineControllers");
const commentControllers = require("./controllers/commentControllers");
const userControllers = require("./controllers/userControllers");
const selectionControllers = require("./controllers/selectionControllers");
const favoriteControllers = require("./controllers/favoriteController");
const noteControllers = require("./controllers/noteControllers");
const mailControllers = require("./controllers/mailController");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyAdminToken,
} = require("./auth");

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

router.post(
  "/resetpassword",
  userControllers.verifyEmailAndPassToNext,
  mailControllers.sendResetMail
);
router.post(
  "/updatepassword",
  hashPassword,
  userControllers.updateUserPassword
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
  userControllers.createUserTasteDesc,
  wineControllers.browseAndPassToNext,
  selectionControllers.deleteSelection,
  selectionControllers.createSelection
);
router.get("/api/selection/user/:id", userControllers.getDescriptionByUser);
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

// --- Admin Protected Routes Below //
router.use(verifyAdminToken);

// USERS

router.get("/api/users", userControllers.getAllUsers);
router.get("/api/users/:id", userControllers.getUsersbyId);
router.delete("/api/users/:id", userControllers.destroy);
router.put("/api/users/:id", hashPassword, userControllers.editUser);

// WINES

router.put("/api/wines/:id", wineControllers.edit);
router.delete("/api/wines/:id", wineControllers.destroy);

module.exports = router;
