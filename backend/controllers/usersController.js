const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();

var User = require("../models/user");

router.get("/", (req, res) => {
  User.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retrieving Users :" + JSON.stringify(err, undefined, 2)
      );
      S;
    }
  });
});

router.post("/", (req, res) => {
  var User = new User({
    fullName: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
  });
  User.save()
    .then((data) => {
      return res.status(200).send(data);
    })
    .catch((error) => {
      return res.status(500).send({ error: error });
    });
});

module.exports = router;
