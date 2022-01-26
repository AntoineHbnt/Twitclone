const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");

require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const app = express();

//Cors policy
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

//Allow to access body and cookies in request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use("/api/user", userRoutes);

//Server launch
app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
