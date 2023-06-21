const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorites" });
  }
}

module.exports = FavoriteManager;
