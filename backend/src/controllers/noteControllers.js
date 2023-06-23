const models = require("../models");

const destroy = (req, res, next) => {
  models.note
    .deleteByUserAndWineId(req.body)
    .then(() => {
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postNote = (req, res) => {
  models.note
    .insertByUserAndWIneID(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAllWineNotes = (req, res) => {
  models.note
    .getAllNoteAverageForEachWine()
    .then(([result]) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  destroy,
  postNote,
  getAllWineNotes,
};
