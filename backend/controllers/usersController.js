const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

var { User } = require("../models/user.model");
const tokenSecret = "secretPass_952456";

router.login = (req, res) =>
  User.findOne({ email: req.body.email }).then((user) => {
    console.log(user);
    if (!user) res.status(404).send({ message: "User not found" });
    else {
      bcrypt.compare(req.body.password, user.password, function (error, match) {
        if (error) res.status(500).json(error);
        else if (match) res.status(200).json({ token: generateToken(user) });
        else res.status(403).json({ error: "password mismatch" });
      });
    }
  });

router.register = (req, res, next) => {
  var user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  });
  user.save((err, doc) => {
    if (!err) {
      res.json({
        message: "Successfully registered!",
        token: generateToken(user),
      });
    } else {
      if (err.code == 11000) {
        res
          .status(422)
          .send("Duplicate Email Found. Please provide a valid email address!");
      } else {
        return next(err);
      }
    }
  });
};

function generateToken(user) {
  return jwt.sign({ data: user }, tokenSecret, { expiresIn: "24h" });
}

module.exports = router;
