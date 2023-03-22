const express = require("express");
const router = express.Router();

var { MongoClient } = require("mongodb");
var { Category } = require("../models/category.model");

router.getCategories = function (req, res) {
  MongoClient.connect(process.env.MONGODB_URI, function (err, db) {
    if (err) throw err;
    var dbo = db.db("PlantRadDB");
    dbo
      .collection("Categories")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.status(200).json({
          message: "Categories objects successfully retrieved",
          categories: result,
        });
        db.close();
      });
  });
};

router.postCategories = function (req, res) {
  var category = new Category({
    category: req.body.category,
    imageSource: req.body.imageSource,
  });
  category.save(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = router;
