const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  postUser(data) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, born, email, hashedPassword, isvigneron, wine_domain, desc_domain, picture_domain)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.firstname,
        data.lastname,
        data.born,
        data.email,
        data.hashedPassword,
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

  update(data) {
    // Convertir la date en objet Date
    const bornDate = data.born.slice(0, 19);

    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, born = ?, email = ?, hashedPassword = ?, isvigneron = ?, wine_domain = ?, desc_domain = ?, picture_domain = ? WHERE id = ?`,
      [
        data.firstname,
        data.lastname,
        bornDate,
        data.email,
        data.hashedPassword,
        data.isvigneron,
        data.wine_domain,
        data.desc_domain,
        data.picture_domain,
        data.id,
      ]
    );
  }
}

module.exports = userManager;
