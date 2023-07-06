const AbstractManager = require("./AbstractManager");

class WineManager extends AbstractManager {
  constructor() {
    super({ table: "wines" });
  }

  insert(wine) {
    return this.database.query(
      `insert into ${this.table} (
        name,
        image,
        domain,
        region,
        year,
        grape,
        alcohol_content
    ) values (?,?,?,?,?,?,?)`,
      [
        wine.name,
        wine.image,
        wine.domain,
        wine.region,
        wine.year,
        wine.grape,
        wine.alcohol_content,
      ]
    );
  }

  // Changement de SQL pour correspondre à la méthode PUT du front-end
  update(wine) {
    return this.database.query(
      `update ${this.table} set 
      name = ?,
      domain = ?,
      year = ?,
      region = ?,
      grape = ?,
      alcohol_content = ?
       where id = ?`,
      [
        wine.name,
        wine.domain,
        wine.year,
        wine.region,
        wine.grape,
        wine.alcohol_content,
        wine.id,
      ]
    );
  }
}

module.exports = WineManager;
