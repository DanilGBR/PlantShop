const express = require("express");
const router = express.Router();

var { user } = require("../models/user.model");

router.get("/", (req, res) => {
  user.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retrieving Users :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post("/", (req, res) => {
  var User = new user({
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
      return res.status(500).send({
        error: error,
      });
    });
});

module.exports = router;
