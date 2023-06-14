const AbstractManager = require("./AbstractManager");

class WineManager extends AbstractManager {
  constructor() {
    super({ table: "wines" });
  }

  insert(wine) {
    return this.database.query(
      `insert into ${this.table} (
        winemaker_id,
        name,
        image,
        domain,
        year,
        region,
        grape,
        alcohol_content,
        red,
        white,
        fruity,
        floral,
        spicy,
        vegetal,
        wooded,
        acid,
        bitter,
        sugar,
        alcool,
        short,
        medium,
        intense
    ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        wine.winemaker_id,
        wine.name,
        wine.image,
        wine.domain,
        wine.year,
        wine.region,
        wine.grape,
        wine.alcohol_content,
        wine.red,
        wine.white,
        wine.fruity,
        wine.floral,
        wine.spicy,
        wine.vegetal,
        wine.wooded,
        wine.acid,
        wine.bitter,
        wine.sugar,
        wine.alcool,
        wine.short,
        wine.medium,
        wine.intense,
      ]
    );
  }

  update(wine) {
    return this.database.query(
      `update ${this.table} set winemaker_id = ?,
      name = ?,
      image = ?,
      domain = ?,
      year = ?,
      region = ?,
      grape = ?,
      alcohol_content = ?,
      red = ?,
      white = ?,
      fruity = ?,
      floral = ?,
      spicy = ?,
      vegetal = ?,
      wooded = ?,
      acid = ?,
      bitter = ?,
      sugar = ?,
      alcool = ?,
      short = ?,
      medium = ?,
      intense = ?,
       where id = ?`,
      [
        wine.winemaker_id,
        wine.name,
        wine.image,
        wine.domain,
        wine.year,
        wine.region,
        wine.grape,
        wine.alcohol_content,
        wine.red,
        wine.white,
        wine.fruity,
        wine.floral,
        wine.spicy,
        wine.vegetal,
        wine.wooded,
        wine.acid,
        wine.bitter,
        wine.sugar,
        wine.alcool,
        wine.short,
        wine.medium,
        wine.intense,
        wine.id,
      ]
    );
  }
}

module.exports = WineManager;
