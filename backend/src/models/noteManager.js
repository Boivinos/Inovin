const AbstractManager = require("./AbstractManager");

class NoteManager extends AbstractManager {
  constructor() {
    super({ table: "user_notes" });
  }

  deleteByUserAndWineId(data) {
    return this.database.query(
      `delete from user_notes where wine_id = ?
      AND user_id = ?`,
      [data.wine_id, data.user_id]
    );
  }

  insertByUserAndWIneID(data) {
    return this.database.query(
      `INSERT INTO user_notes (wine_id, user_id, note)
      VALUES (?, ?, ?)`,
      [data.wine_id, data.user_id, data.note]
    );
  }

  getAllNoteAverageForEachWine() {
    return this.database.query(`SELECT wine_id, AVG(note) AS moyenne_note
    FROM user_notes
    GROUP BY wine_id;`);
  }
}

module.exports = NoteManager;
