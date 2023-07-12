const fs = require("fs");
// Ajout de uuid
const { v4: uuidv4 } = require("uuid");
const models = require("../models");

const browse = (req, res) => {
  models.wine
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseAndPassToNext = (req, res, next) => {
  models.wine
    .findAll()
    .then(([rows]) => {
      req.body.allWines = rows;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.wine
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const item = req.body;

  item.id = parseInt(req.params.id, 10);

  models.wine
    .update(item)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// method qui permet d'ajouter le vin
const addWine = (req, res) => {
  console.warn(req);
  // file: {
  //   back     fieldname: 'image',
  //   back     originalname: '20180927_143301.jpg',
  //   back     encoding: '7bit',
  //   back     mimetype: 'image/jpeg',
  //   back     destination: './../frontend/src/assets/uploads/',
  //   back     filename: 'd331bdfadb46763126cc775b23d87310',
  //   back     path: '..\\frontend\\src\\assets\\uploads\\d331bdfadb46763126cc775b23d87310',
  //   back     size: 330289
  //   back   },

  const newFileName = `${uuidv4()}-${req.file.originalname}`;

  // On utilise la fonction rename de fs pour renommer le fichier
  fs.rename(
    `./../frontend/src/assets/uploads/${req.file.filename}`,
    `./../frontend/src/assets/uploads/${newFileName}`,
    (err) => {
      if (err) {
        console.error("Error during rename operation:", err);
        throw err;
      }
    }
  );

  const wine = req.body;
  // pas d'image dans wine (nettoyé par le middleware upload), donc on le rajoute avec l'url
  // qui pointe vers le dossier ou l'on a enregistrer les images
  wine.image = `/src/assets/uploads/${newFileName}`;
  console.warn(req.file);

  // TODO validations (length, format...)

  models.wine
    .insert(wine)
    .then(([result]) => {
      res.location(`/items/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.wine
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  addWine,
  destroy,
  browseAndPassToNext,
};
