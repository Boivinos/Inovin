const nodemailer = require("nodemailer");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const sendResetMail = (req, res) => {
  const payload = {
    email: req.body.email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
  const resetURL = `${process.env.FRONTEND_URL}/nouveau-mot-de-passe/?token=${token}`;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: false,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });
  const mailOptions = {
    from: "noreply@inovin.com", // this is the address from which the email will be sent
    to: req.body.email, // this is the address to which the email will be sent
    subject: "Inovin, choisissez votre nouveau mot de passe",
    html: `<p>Ceci est un message généré automatiquement par Inovin</p>
    <p>Clique sur le bouton ci-dessous pour définir un nouveau mot de passe</p>
    <a href=${resetURL}>Je choisis un nouveau mot de passe</a>`,
  };

  transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.warn(info);
      res.status(200).send("Message sent");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("Something went wrong");
    });
};

module.exports = {
  sendResetMail,
};
