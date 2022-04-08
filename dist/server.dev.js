"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

var cors = require("cors");

var firebaseConfig = require("./config/firebase");

var userRoutes = require("./routes/user.routes");

var tweetRoutes = require("./routes/tweet.routes");

var notificationRoutes = require("./routes/notification.routes");

var _require = require("./middleware/auth.middleware"),
    checkUser = _require.checkUser,
    requireAuth = _require.requireAuth;

require("dotenv").config({
  path: "./config/.env"
});

require("./config/db");

require("./config/firebase");

global.XMLHttpRequest = require("xhr2");
var app = express(); //Cors policy

var corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false
};
app.use(cors(corsOptions)); //Allow to access body and cookies in request

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser()); //routes

app.use("/api/user", userRoutes);
app.use("/api/tweet", tweetRoutes);
app.use("/api/notification", notificationRoutes); // jwt

app.get("*", checkUser);
app.get("/jwtid", requireAuth, function (req, res) {
  if (res.locals.user) res.status(200).send(res.locals.user._id);
}); //Server launch

app.listen(process.env.PORT, function () {
  console.log("Listening on port " + process.env.PORT);
});