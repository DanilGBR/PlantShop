const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

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
      let payload = {
        id: doc._id,
      };
      let secretKey = "secretKey_952456";
      let token = jwt.sign(payload, secretKey, { expiresIn: "2 days" });
      res.status(200).header("Authorization", "Bearer " + token);
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
