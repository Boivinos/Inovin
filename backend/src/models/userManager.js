const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  postUser(data) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, born, email, hashedPassword, isadmin, isvigneron, wine_domain, desc_domain, picture_domain)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.firstname,
        data.lastname,
        data.born,
        data.email,
        data.hashedPassword,
        data.isadmin,
        data.isvigneron,
        data.wine_domain,
        data.desc_domain,
        data.picture_domain,
      ]
    );
  }

  getUserByEmail(data) {
    return this.database.query(`select * from users where email = ?`, [
      data.email,
    ]);
  }
}

module.exports = userManager;
