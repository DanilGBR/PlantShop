const express = require("express");
const router = express.Router();

var { MongoClient } = require("mongodb");

router.getProducts = function (req, res) {
  MongoClient.connect(process.env.MONGODB_URI, function (err, db) {
    if (err) throw err;
    var dbo = db.db("PlantRadDB");
    dbo
      .collection("Products")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
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
