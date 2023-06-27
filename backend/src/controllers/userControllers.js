const models = require("../models");

const destroy = (req, res) => {
  models.user
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

const createUser = (req, res, next) => {
  models.user
    .postUser(req.body)
    .then(([result]) => {
      if ([result.affectedRows !== 0]) {
        next();
      } else {
        res.sendStatus(400);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  models.user
    .getUserByEmail(req.body)
    .then(([users]) => {
      if (users[0] != null) {
        req.user = users[0]; // eslint-disable-line prefer-destructuring
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getAllUsers = (req, res) => {
  models.user
    .findAll()
    .then(([users]) => {
      res.send(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUsersbyId = (req, res) => {
  const { id } = req.params;
  models.user
    .find(id)
    .then(([users]) => {
      res.send(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  destroy,
  createUser,
  getUserByEmailWithPasswordAndPassToNext,
  getAllUsers,
  getUsersbyId,
};
