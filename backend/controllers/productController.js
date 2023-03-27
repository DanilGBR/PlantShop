const express = require("express");
const router = express.Router();

var { MongoClient } = require("mongodb");
var { Product } = require("../models/product.model");

router.getProducts = function (req, res) {
  MongoClient.connect(process.env.MONGODB_URI, function (err, db) {
    if (err) throw err;
    var dbo = db.db("PlantRadDB");
    dbo
      .collection("Products")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.status(200).json({
          message: "Product objects successfully retrieved",
          products: result,
        });
        db.close();
      });
  });
};

router.postProducts = function (req, res) {
  var product = new Product({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    imageSource: req.body.imageSource,
    available: req.body.available,
  });
  product.price = randomIntFromInterval(1, 200);
  product.save(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

router.getFeaturedProducts = function (req, res) {
  MongoClient.connect(process.env.MONGODB_URI, function (err, db) {
    if (err) throw err;
    var dbo = db.db("PlantRadDB");
    dbo
      .collection("Products")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.status(200).json({
          message: "Featured products objects successfully retrieved",
          featuredProducts: getRandom(result, 3),
        });
        db.close();
      });
  });
};

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

module.exports = router;
