const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "wines" });
  }

  insert() {
    return this.database.query(`insert into ${this.table} () values ()`, []);
  }

  update() {
    return this.database.query(`update ${this.table} set "" where id = ?`, []);
  }

  findByWineID(id) {
    return this.database.query(
      `select wine_id, firstname, lastname, comment_content, comment_date from user_comments
      JOIN users ON users.id = user_comments.user_id
      WHERE wine_id = ?
      ORDER BY comment_date DESC;`,
      [id]
    );
  }

  postCommentByUserId(data) {
    return this.database.query(
      `INSERT INTO user_comments (wine_id, user_id, comment_content, comment_date)
      VALUES (?, ?, ?, NOW())`,
      [data.wine_id, data.user_id, data.comment_content]
    );
  }
}

module.exports = CommentManager;
