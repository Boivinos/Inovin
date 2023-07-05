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
    // Convertir la date au bon format et ajout d'une condition pour s'assurer que data.born est défini et est une chaîne de caractères

    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, hashedPassword = ? WHERE id = ?`,
      [data.firstname, data.lastname, data.emailAdress, data.password, data.id]
    );
  }
}

module.exports = userManager;
