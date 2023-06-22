const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorites" });
  }

  createFavorite(data) {
    return this.database.query(
      `insert into ${this.table} (user_id, wine_id)
    VALUES (?,?)`,
      [data.user_id, data.wine_id]
    );
  }

  deleteFavorite(data) {
    return this.database.query(
      `delete from ${this.table} 
    WHERE user_id=?
    AND wine_id = ?`,
      [data.user_id, data.wine_id]
    );
  }

  getFavoriteByWineAndUserID(data) {
    return this.database.query(
      `select * from favorites where user_id = ?
    AND wine_id = ?`,
      [data.user_id, data.wine_id]
    );
  }

  getAllFavoriteByUser(id) {
    return this.database.query(
      `select * from wines 
    inner join favorites ON wines.id = favorites.wine_id
    WHERE favorites.user_id = ?`,
      [id]
    );
  }
}

module.exports = FavoriteManager;
