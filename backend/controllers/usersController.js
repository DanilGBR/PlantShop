const express = require("express");
const router = express.Router();

var { User } = require("../models/user.model");

router.login = (req, res) => {
  User.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retrieving Users :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
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
      res.send(doc);
    } else {
      if (err.code == 11000) {
        res.status(422).send("Duplicate Email Found");
      } else {
        return next(err);
      }
    }
  });
};

module.exports = router;
