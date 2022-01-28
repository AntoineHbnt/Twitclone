const TweetModel = require("../models/tweet.model");
const ObjectId = require("mongoose").Types.ObjectId;
const { uploadErrors } = require("../utils/error.utils");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.createTweet = async (req, res) => {
  let filepaths = [];
  let dir = `${__dirname}/../client/public/uploads/tweets/${req.body.posterId}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  if (req.files != null) {
    try {
      req.files.map((file, i) => {
        if (
          file.detectedMimeType != "image/jpg" &&
          file.detectedMimeType != "image/png" &&
          file.detectedMimeType != "image/jpeg"
        )
          throw Error("invalid file");

        if (file.size > 1000000) {
          throw Error("max size");
        }
        filepaths.push(dir + "/" + req.body.posterId + Date.now() + i + ".jpg");
      });
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(201).json({ errors });
    }

    for (let i = 0; i < req.files.length; i++) {
      await pipeline(req.files[i].stream, fs.createWriteStream(filepaths[i]));
    }
  }

  try {
    const tweet = await TweetModel.create({
      posterId: req.body.posterId,
      message: req.body.message,
      audience: req.body.audience,
      pictures: req.files != null ? filepaths : [],
    });
    return res.status(201).send(tweet);
  } catch (err) {
    return res.status(409).send(err);
  }
};

module.exports.getAllTweets = async (req, res) => {
  const tweets = await TweetModel.find();
  if (tweets) return res.status(200).send(tweets);
  else return res.status(404).send("No tweets found");
};

module.exports.getTweet = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(404).send("Unknown ID : " + req.params.id);

  try {
    const tweet = await TweetModel.findById(req.params.id);
    return res.status(200).send(tweet);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports.deleteTweet = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(404).send("Unknown ID : " + req.params.id);

  try {
    await TweetModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("succefuly delete");
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.fav = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(404).send("Unknown ID : " + req.params.id);

  if (!ObjectId.isValid(req.body.tweetToFav))
    return res.status(404).send("Unknown ID : " + req.body.tweetToFav);

  try {
    await TweetModel.findByIdAndUpdate(
      req.body.tweetToFav,
      {
        $addToSet: {
          favs: req.params.id,
        },
      },
      { new: true }
    )
      .then((docs) => {return res.status(200).send(docs)})

    await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: {
          favs: req.body.tweetToFav,
        },
      },
      { new: true }
    )
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports.unfav = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(404).send("Unknown ID : " + req.params.id);

  if (!ObjectId.isValid(req.body.tweetToUnfav))
    return res.status(404).send("Unknown ID : " + req.body.tweetToUnfav);

  try {
    await TweetModel.findByIdAndUpdate(
      req.body.tweetToUnfav,
      {
        $pull: {
          favs: req.params.id,
        },
      },
      { new: true }
    )
      .then((docs) => res.status(200).send(docs))

    await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          favs: req.body.tweetToUnfav,
        },
      },
      { new: true }
    )
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
