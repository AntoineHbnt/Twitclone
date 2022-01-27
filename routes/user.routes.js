const router = require("express").Router();
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");
const multer = require("multer");
const upload = multer();

//auth
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout)

//user db
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

//user action
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);

module.exports = router;
