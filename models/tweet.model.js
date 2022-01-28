const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      require: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      maxlength: 280,
    },
    audience: {
      type: String,
      require: true,
      default: "public",
    },
    comments: {
      type: [String],
      required: true,
    },
    tweetId:{
      type: String
    },
    favs: {
      type: [String],
      require: true,
    },
    retweet: {
      type: [String],
      require: true,
    },
    pictures: {
      type: [String],
    },
    gif: {
      type: String,
    },
    sondage: {
      type: {
        questions: [String],
        finalDate: Number,
        result: [Number],
      },
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('tweet', TweetSchema);