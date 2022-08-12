const express = require("express");
const router = express.Router();

var { Products } = require("../models/product.model");

router.getProducts = function (req, res) {
  console.log(Products.find({}));
  db.Products.find().toArray(function (err, result) {
    console.log("im here");
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

router.postProducts = function (req, res) {
  var product = new Product({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    available: req.body.available,
  });
  product.save(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = router;
