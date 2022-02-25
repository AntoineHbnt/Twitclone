const router = require("express").Router();
const tweetController = require("../controllers/tweet.controller");
const multer = require("multer");
const { memoryStorage } = require("multer");
const upload = multer();

//tweet db
router.post("/:id", upload.array("pictures", 4), tweetController.createTweet);
router.get("/", tweetController.getAllTweets);
router.get("/:id", tweetController.getTweet);
router.get("/thread/:id", tweetController.getThread);
router.delete("/:id", tweetController.deleteTweet);

//tweet action
router.patch("/fav/:id", tweetController.fav);
router.patch("/unfav/:id", tweetController.unfav);

module.exports = router;
