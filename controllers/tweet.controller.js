const TweetModel = require("../models/tweet.model");
const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;
const { getStorage, ref, upload, uploadBytes } = require("firebase/storage");
const { uploadErrors } = require("../utils/error.utils");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

module.exports.createTweet = async (req, res) => {
  let filepaths = [];

  if (req.files !== null) {
    try {
      req.files.map((file, i) => {
        if (
          file.detectedMimeType !== "image/jpg" &&
          file.detectedMimeType !== "image/png" &&
          file.detectedMimeType !== "image/jpeg"
        )
          throw Error("invalid file");

        if (file.size > 1000000) {
          throw Error("max size");
        }
        filepaths.push(
          `users/${req.body.posterId}/tweet/` + Date.now() + i + ".jpg"
        );
      });
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(201).json({ errors });
    }

    console.log(req.files[0]);
    for (let i = 0; i < req.files.length; i++) {
      uploadBytes(ref(storage, filepaths[i]), req.files[i]).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });
    }
  }

  try {
    const tweet = await TweetModel.create({
      posterId: req.body.posterId,
      message: req.body.message,
      audience: req.body.audience,
      pictures: req.files !== null ? filepaths : [],
    });
    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: {
          tweets: {
            id: tweet._id,
            timestamps: tweet.createdAt,
          },
        },
      },
      { new: true, upsert: true }
    );

    return res.status(200).send(tweet);
  } catch (err) {
    console.log(err);
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

module.exports.getThread = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(404).send("Unknown ID : " + req.params.id);

  const sortTweets = (tweetsArray) => {
    return tweetsArray.sort((a, b) => {
      if (a.timestamps < b.timestamps) return 1;
      if (a.timestamps > b.timestamps) return -1;
      return 0;
    });
  };

  const handleTweets = async () => {
    const user = await UserModel.findById(req.params.id);
    const thread = [];

    await Promise.all(
      user.following.map(async (followingId) => {
        followingUser = await UserModel.findById(followingId);
        thread.push.apply(thread, followingUser.tweets);
      })
    );

    return sortTweets(thread);
  };

  try {
    const thread = await handleTweets();
    return res.status(200).send(thread);
  } catch (err) {
    console.log(err);
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
    ).then((docs) => {
      return res.status(200).send(docs);
    });

    await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: {
          favs: req.body.tweetToFav,
        },
      },
      { new: true }
    );
  } catch (err) {
    console.log(err);
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
    ).then((docs) => res.status(200).send(docs));

    await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          favs: req.body.tweetToUnfav,
        },
      },
      { new: true }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
