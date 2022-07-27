const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

var { User } = require("../models/user.model");
const tokenSecret = "secretPass_952456";

router.login = (req, res) =>
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user)
        res.status(404).send({ message: "User with email not found!" });
      else {
        bcrypt.compare(
          req.body.password,
          user.password,
          function (error, match) {
            if (error) res.status(500).json(error);
            else if (match)
              res.status(200).json({
                message: "Login successful!",
                token: generateToken(user),
              });
            else res.status(403).json({ message: "Password is invalid!" });
          }
        );
      }
    })
    .catch((error) => res.status(500).json(error));

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

router.resetPassword = (req, res) => {
  console.log(req.body);
  if (req.body.email) {
    console.log(req.body);
    res.status(200).json({ message: "Reset password link successfully sent!" });
  } else {
    console.log(req.body);
    res.status(500).json({
      message: "Reset password link error! Please check email and try again!",
    });
  }
};

router.verify = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) res.status(403).json({ error: "Invalid token" });
  else {
    jwt.verify(token.split(" ")[1], tokenSecret, (error, value) => {
      if (error)
        res.status(500).json({ error: "failed to authenticate token" });
      req.user = value.data;
      next();
    });
  }
};

function generateToken(user) {
  return jwt.sign({ data: user }, tokenSecret, { expiresIn: "24h" });
}

module.exports = router;
