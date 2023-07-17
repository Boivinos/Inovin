// import some node modules for later

const path = require("node:path");

// create express app

const express = require("express");

const app = express();

// use some application-level middlewares

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

// import and mount the API routes

const router = require("./router");

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public")));

// serve REACT APP

app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));
app.use(router);
// ready to export

module.exports = app;
