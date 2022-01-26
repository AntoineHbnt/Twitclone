const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { registerErrors, loginErrors } = require("../utils/error.utils");

const maxAge = 3 * 24 * 60 * 60 * 1000; // 3 jours

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: maxAge });
};

module.exports.register = async (req, res) => {
  const { email, password, userAt, userPseudo } = req.body;

  try {
    const user = await UserModel.create({
      email,
      password,
      userAt,
      userPseudo,
    });
    return res.status(201).json({ user: user._id });
  } catch (err) {
    let errors = registerErrors(err);
    console.log(err);
    return res.status(409).send({ errors });
  }
};

module.exports.login = async (req, res) => {
  const { connectId, password } = req.body;

  try {
    const user = await UserModel.login(connectId, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge });
    return res.status(200).json({ user: user._id });
  } catch (err) {
    let errors = loginErrors(err);
    return res.status(409).send({ errors });
  }
};

module.exports.logout = (req, res) => {
  return res
    .cookie("jwt", "", { maxAge: 1 })
    .status(200)
    .send("Disconnected")
    .redirect("/login");
};
