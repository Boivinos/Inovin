const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");
require("dotenv").config();

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.hashedPassword, req.body.password) //hashedPassword vient de la BDD password vient du front
    .then((isVerified) => {
      if (isVerified) {
        // si mdp clair matche mdp hashé, alors on crée un token qui contient les infos du user
        const payload = {
          id: req.user.id,
          firstname: req.user.firstname,
          lastname: req.user.lastname,
          isAdmin: req.user.isadmin,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          // création du token ici
          expiresIn: "1h",
        });
        delete req.user.hashedPassword;
        res.send({ token, user: req.user });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }
    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }
    req.payload = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};
const verifyAdminToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    const user = jwtDecode(authorizationHeader);
    if (!user.isAdmin) {
      res.status(401).send("unauthorized");
    } else {
      next();
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyAdminToken,
};
