const models = require("../models");

const destroy = (req, res) => {
  models.favorite
    .deleteFavorite(req.body)
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

const createUserFavorite = (req, res) => {
  models.favorite
    .createFavorite(req.body)
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

const getFavorite = (req, res) => {
  models.favorite
    .getFavoriteByWineAndUserID(req.body)
    .then(([favorite]) => {
      if (favorite[0] != null) {
        res.send("This wine is favorite");
      } else {
        res.send("This wine is not favorite");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
const getAllFavorite = (req, res) => {
  models.favorite
    .getAllFavoriteByUser(req.params.id)
    .then(([favorite]) => {
      if (favorite != null) {
        res.send(favorite);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  destroy,
  createUserFavorite,
  getFavorite,
  getAllFavorite,
};
