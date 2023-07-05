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

  createTaste_desc(data) {
    const createColorPref = (red, white) => {
      if (!red && !white) {
        return "Tu n'as pas de préférence sur la couleur du vin.";
      }
      if (red && white) {
        return "Tu aimes les vins rouges comme les vins blancs.";
      }
      return `Tu préfères les vins ${red ? "rouges." : "blancs."}`;
    };
    const aromesChoices = {
      fruité: data.fruity,
      floral: data.floral,
      épicé: data.spicy,
      végétal: data.vegetal,
      boisé: data.wooded,
    };
    const aromesSentences = {
      aucun: " Tu n'as pas de préférence particulière sur les arômes des vins.",
      unique: "L'arôme qui te parle le plus est",
      multiples: "Les arômes qui te parlent le plus sont : ",
    };
    const saveursChoices = {
      acide: data.acid,
      amer: data.bitter,
      sucré: data.sugar,
      alcoolisé: data.alcool,
    };
    const saveursSentences = {
      aucun: " Aucun saveur en particulier ne te séduit.",
      unique: "Tu aimes une saveur en particulier :",
      multiples: "Les goûts pour lesquels tu as une préférence sont : ",
    };
    const intensityChoices = {
      légers: data.short,
      équilibrés: data.medium,
      intenses: data.intense,
    };
    const intensitySentences = {
      aucun: "L'intensité du vin n'est pas un critère important pour toi.",
      unique: "Tu aimes plutôt les vins",
      multiples: "Concernant l'intensité, tu aimes les vins ",
    };

    const createOtherPref = (choices, sentences) => {
      const filterObject = (obj, callback) => {
        return Object.entries(obj).filter(([key, val]) => callback(val, key));
      };

      const selection = filterObject(choices, (val) => val === 1);
      if (!selection.length) {
        return sentences.aucun;
      }
      if (selection.length === 1) {
        return `${sentences.unique} ${selection[0][0]}.`;
      }
      let tasteSentence = sentences.multiples;
      selection.forEach((el) => {
        tasteSentence += `${el[0]}, `;
      });
      return `${tasteSentence.substring(0, tasteSentence.length - 2)}.`;
    };

    const tasteDesc = `${createColorPref(
      data.red,
      data.white
    )} ${createOtherPref(aromesChoices, aromesSentences)} ${createOtherPref(
      saveursChoices,
      saveursSentences
    )} ${createOtherPref(intensityChoices, intensitySentences)}`;

    return this.database.query(
      `update users set taste_description = ? where id = ?`,
      [tasteDesc, data.userID]
    );
  }

  getUserDesc(id) {
    return this.database.query(
      `select taste_description from users where id = ?`,
      [id]
    );
  }
}

module.exports = userManager;
