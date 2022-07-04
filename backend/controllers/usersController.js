const { rejects } = require("assert");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { restart } = require("nodemon");

var { User } = require("../models/user.model");

router.login = (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, docs) => {
      if (err) {
        console.log(
          "Error! No email address found!" + JSON.stringify(err, undefined, 2)
        );
      } else if (docs) {
        bcrypt.compare(req.body.password, docs.password, (err, docs) => {
          if (err) {
            console.log("Password does not match! Please try again");
          }
          if (docs) {
            let payload = {
              id: docs._id,
            };
            let secretKey = "secretKey_952456";
            let token = jwt.sign(payload, secretKey, {
              expiresIn: "2 days",
            });
            res.json({
              message: "Successfully logged in",
              token: token,
            });
          } else {
            res.json({
              message: "Login failed! Please try again",
              reason: "Wrong password",
            });
          }
        });
      }
    }
  );
};

router.register = (req, res, next) => {
  var user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  });
  user.save((err, doc) => {
    if (!err) {
      let payload = {
        id: doc._id,
      };
      let secretKey = "secretKey_952456";
      let token = jwt.sign(payload, secretKey, {
        expiresIn: "2 days",
      });
      res.setHeader("Content-Type", "application/json");
      res.json({
        message: "Successfully registered!",
        token: token,
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

module.exports = router;
