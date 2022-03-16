const TweetModel = require("../models/tweet.model");
const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;
const { uploadErrors } = require("../utils/error.utils");
const { uploadFiles } = require("../utils/upload.utils");

module.exports.createTweet = async (req, res) => {
  let files = req.files;
  let filepaths = [];

  if (!ObjectId.isValid(req.params.id))
    return res.status(404).send("Unknown ID : " + req.params.id);

  try {
    filepaths = await uploadFiles(files, req.params.id, "tweet");
  } catch (err) {
    let errors = uploadErrors(err);
    return res.status(201).send(errors);
  }

  try {
    const tweet = await TweetModel.create({
      posterUser: req.params.id,
      message: req.body.message,
      audience: req.body.audience,
      type: req.body.type,
      pictures: req.files !== null ? filepaths : [],
    });
    await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: {
          tweets: tweet._id,
        },
      },
      { new: true, upsert: true }
    );

    return res.status(200).send(tweet);
  } catch (err) {
    return res.status(201).send(err.message);
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

  const filteredTweets = (tweetsArray) => {
    const idArray = [];
    return tweetsArray.filter((elem) => {
      if (!idArray.includes(elem.tweet._id.toString()) || elem.type == "retweet") {
        idArray.push(elem.tweet._id.toString());
        return true;
      }

      return false;
    });
  };

  const sortTweets = (tweetsArray) => {
    return filteredTweets(tweetsArray).sort((a, b) => {
      if (a.tweet.createdAt < b.tweet.createdAt) return 1;
      if (a.tweet.createdAt > b.tweet.createdAt) return -1;
      return 0;
    });
  };

  const handleTweets = async () => {
    const user = await UserModel.findById(req.params.id);
    const timeline = [];
    const userFavs = [];
    const userRetweets = [];

    await Promise.all(
      user.tweets.map(async (tweetId) => {
        tweet = await TweetModel.findById(tweetId).populate("posterUser");
        if (tweet) timeline.push({ tweet, type: "tweet" });
        if (tweet.favs.includes(user._id)) userFavs.push(tweet._id);
        if (tweet.retweets.includes(user._id)) userRetweets.push(tweet._id);
      })
    );

    await Promise.all(
      user.retweets.map(async (tweetId) => {
        tweet = await TweetModel.findById(tweetId).populate("posterUser");
        if (tweet) timeline.push({ tweet, type: "retweet" });
        if (tweet.favs.includes(user._id)) userFavs.push(tweet._id);
        if (tweet.retweets.includes(user._id)) userRetweets.push(tweet._id);
      })
    );

    await Promise.all(
      user.following.map(async (followingId) => {
        followingUser = await UserModel.findById(followingId);

        await Promise.all(
          followingUser.tweets.map(async (tweetId) => {
            tweet = await TweetModel.findById(tweetId).populate("posterUser");
            if (tweet) timeline.push({ tweet, type: "tweet" });
            if (tweet.favs.includes(user._id)) userFavs.push(tweet._id);
            if (tweet.retweets.includes(user._id)) userRetweets.push(tweet._id);
          })
        );
        await Promise.all(
          followingUser.retweets.map(async (tweetId) => {
            tweet = await TweetModel.findById(tweetId).populate("posterUser");
            if (tweet) timeline.push({ tweet, type: "retweet", followingUser });
            if (tweet.favs.includes(user._id)) userFavs.push(tweet._id);
            if (tweet.retweets.includes(user._id)) userRetweets.push(tweet._id);
          })
        );
        await Promise.all(
          followingUser.favs.map(async (tweetId) => {
            tweet = await TweetModel.findById(tweetId).populate("posterUser");
            if (tweet) timeline.push({ tweet, type: "fav", followingUser });
            if (tweet.favs.includes(user._id)) userFavs.push(tweet._id);
            if (tweet.retweets.includes(user._id)) userRetweets.push(tweet._id);
          })
        );
      })
    );

    return {
      timeline: sortTweets(timeline),
      userFavs,
      userRetweets
    };
  };

  try {
    const thread = await handleTweets();
    return res.status(200).send(thread);
  } catch (err) {
    console.log(err.message);
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
  const uid = req.body.uid;
  const tweetId = req.params.id;

  if (!ObjectId.isValid(uid))
    return res.status(404).send("Unknown ID : " + uid);

  if (!ObjectId.isValid(tweetId))
    return res.status(404).send("Unknown ID : " + tweetId);

  try {
    await TweetModel.findByIdAndUpdate(
      tweetId,
      {
        $addToSet: {
          favs: uid,
        },
      },
      { new: true }
    ).then((docs) => {
      return res.status(200).send(docs);
    });

    await UserModel.findByIdAndUpdate(
      uid,
      {
        $addToSet: {
          favs: tweetId,
        },
      },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports.unfav = async (req, res) => {
  const uid = req.body.uid;
  const tweetId = req.params.id;

  if (!ObjectId.isValid(uid))
    return res.status(404).send("Unknown ID : " + uid);

  if (!ObjectId.isValid(tweetId))
    return res.status(404).send("Unknown ID : " + tweetId);

  try {
    await TweetModel.findByIdAndUpdate(
      tweetId,
      {
        $pull: {
          favs: uid,
        },
      },
      { new: true }
    ).then((docs) => res.status(200).send(docs));

    await UserModel.findByIdAndUpdate(
      uid,
      {
        $pull: {
          favs: tweetId,
        },
      },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports.retweet = async (req, res) => {
  const uid = req.body.uid;
  const tweetId = req.params.id;

  if (!ObjectId.isValid(uid))
    return res.status(404).send("Unknown ID : " + uid);

  if (!ObjectId.isValid(tweetId))
    return res.status(404).send("Unknown ID : " + tweetId);

  try {
    await TweetModel.findByIdAndUpdate(
      tweetId,
      {
        $addToSet: {
          retweets: uid,
        },
      },
      { new: true }
    ).then((docs) => {
      return res.status(200).send(docs);
    });

    await UserModel.findByIdAndUpdate(
      uid,
      {
        $addToSet: {
          retweets: tweetId,
        },
      },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports.unRetweet = async (req, res) => {
  const uid = req.body.uid;
  const tweetId = req.params.id;

  if (!ObjectId.isValid(uid))
    return res.status(404).send("Unknown ID : " + uid);

  if (!ObjectId.isValid(tweetId))
    return res.status(404).send("Unknown ID : " + tweetId);

  try {
    await TweetModel.findByIdAndUpdate(
      tweetId,
      {
        $pull: {
          retweets: uid,
        },
      },
      { new: true }
    ).then((docs) => res.status(200).send(docs));

    await UserModel.findByIdAndUpdate(
      uid,
      {
        $pull: {
          retweets: tweetId,
        },
      },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
};
