const models = require("../models");

const createSelection = (req, res) => {
  models.selection
    .createUserSelection(req.body)
    .then(([result]) => {
      res.send(result).status(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getSelectionByUser = (req, res) => {
  models.selection
    .getSelectionByID(req.params.id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteSelection = (req, res, next) => {
  models.selection
    .deleteUserSelection(req.body)
    .then(() => {
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  createSelection,
  deleteSelection,
  getSelectionByUser,
};
