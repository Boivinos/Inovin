const AbstractManager = require("./AbstractManager");

class SelectionManager extends AbstractManager {
  constructor() {
    super({ table: "selection" });
  }

  createUserSelection(data) {
    const wineArr = data.allWines;
    let selectedIDs = [];
    const userSelectedCaras = Object.keys(data).filter(
      (key) => data[key] === 1 && key !== "userID"
    );

    for (let i = 0; i < wineArr.length; i += 1) {
      let score = 0;

      userSelectedCaras.forEach((cara) => {
        let increment = 1;
        if (cara === "red" || cara === "white") {
          increment = 100;
        }

        if (data[cara] === 1 && wineArr[i][cara] === 1) {
          score += increment;
        }
      });
      const temp = { id: wineArr[i].id, score };

      selectedIDs.push(temp);
    }
    selectedIDs = selectedIDs.sort((a, b) => b.score - a.score).slice(0, 10);

    let query = "insert into selection (user_id, wine_id, score) values ";
    for (let i = 0; i < selectedIDs.length; i += 1) {
      query += `(${data.userID}, ${selectedIDs[i].id}, ${selectedIDs[i].score}),`;
    }
    const finalQuery = `${query.slice(0, -1)};`;
    return this.database.query(`
   ${finalQuery} 
    `);
  }

  deleteUserSelection(data) {
    return this.database.query(
      `delete from selection where user_id = ?`,
      data.userID
    );
  }

  getSelectionByID(id) {
    return this.database.query(
      `select * from wines 
    inner join selection ON wines.id = selection.wine_id
    WHERE selection.user_id = ?
    ORDER BY score DESC;
    `,
      id
    );
  }
}

module.exports = SelectionManager;
