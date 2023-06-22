const models = require("../models");

const destroy = (req, res) => {
  models.comment
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

const getCommentAndAuthorByWineID = (req, res) => {
  models.comment
    .findByWineID(req.params.id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postComment = (req, res) => {
  models.comment
    .postCommentByUserId(req.body)
    .then(() => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const currentDate = `${year}-${month}-${day}`;
      res
        .send({
          ...req.body,
          comment_date: currentDate,
        })
        .status(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  destroy,
  getCommentAndAuthorByWineID,
  postComment,
};
