const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {isEmail, isMobilePhone} = require('validator');

const userSchema = new mongoose.Schema(
  {
    userAt: {
      type: String,
      require: true,
      trim: true,
      unique: true,
      minlength: 6,
      maxlength: 25,
    },
    userPseudo: {
      type: String,
      require: true,
      trim: true,
      minlength: 6,
      maxlength: 25,
    },
    identifier: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    dateOfBirth: {
      type: Date,
      require: true,
    },
    password: {
      type: String,
      require: true,
      maxlength: 1024,
      minlength: 6,
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png",
    },
    bio: {
      type: String,
      default: "",
      maxlength: 1024,
    },
    localisation: {
      type: String,
      maxlength: 500,
    },
    website: {
      type: String,
      maxlength: 100,
    },
    dateOfBirth: {
      type: Date,
      require: true,
    },
    favs: {
      type: [String],
    },
    followers: {
      type: [String],
    },
    following: {
      type: [String],
    },
    tweets: {
      type: [
        {
          tweetId: String,
          timestamps: Number
        }
      ]
    },
    notifications: {
      type: [
        {
          notifType: String,
          tweetId: String,
          timestamps: Number,
        },
      ],
      require: true,
    },
    feed: {
      type: [
        {
          tweetId: String,
          tweetType: String,
          timestamps: Number,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

//Play before save into db (pw hash)
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//Login verification
userSchema.statics.login = async function (connectId, password) {
  const user = await (isEmail(connectId) || isMobilePhone(connectId)
    ? this.findOne({ identifier: connectId })
    : this.findOne({ userAt: connectId }));
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    } else throw Error("incorrrect password");
  } else throw Error("identifiant incorrect");
};

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
