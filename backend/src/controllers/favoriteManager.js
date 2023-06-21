const models = require("../models");

const destroy = (req, res) => {
  models.favorite
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

const createFavorite = (req, res) => {
  models.favorite
    .postUser(req.body)
    .then(([result]) => {
      res.send(result).status(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  destroy,
  createFavorite,
};
