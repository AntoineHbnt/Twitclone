const mongoose = require('mongoose');

mongoose
    .connect("mongodb+srv://"+ process.env.DB_USER_PASS +"@cluster0.8dijc.mongodb.net/twiclone")
    .then(() => console.log("Connect to mongodb"))
    .catch((err) => console.log("Failed to connect mongodb : \n",err))