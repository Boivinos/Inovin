const jwtDecode = require("jwt-decode");
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
      if (result.affectedRows !== 0) {
        next();
      } else {
        res.sendStatus(400);
      }
    })
    .catch((err) => {
      console.error(err);
      if (err.sqlState === "23000") {
        res.sendStatus(409);
      } else res.sendStatus(500);
    });
};
const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  models.user
    .getUserByEmail(req.body)
    .then(([users]) => {
      if (users[0] != null) {
        //recuperer le user qui a l'email qui matche
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

const editUser = (req, res) => {
  const item = req.body;

  item.id = parseInt(req.params.id, 10);

  models.user
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

const createUserTasteDesc = (req, res, next) => {
  models.user
    .createTaste_desc(req.body)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getDescriptionByUser = (req, res) => {
  models.user
    .getUserDesc(req.params.id)
    .then(([selection]) => {
      res.send(selection[0].taste_description);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const verifyEmailAndPassToNext = (req, res, next) => {
  models.user
    .verifyEmail(req.body.email)
    .then(([user]) => {
      if (user.length) {
        next();
      } else {
        res.status(204).send("No user found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const updateUserPassword = (req, res) => {
  const { email } = jwtDecode(req.body.token);
  models.user
    .updatePassword(req.body.hashedPassword, email)
    .then(() => {
      res.status(204).send("User Updated");
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
  editUser,
  createUserTasteDesc,
  getDescriptionByUser,
  verifyEmailAndPassToNext,
  updateUserPassword,
};
