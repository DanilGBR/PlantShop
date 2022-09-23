const express = require("express");
const router = express.Router();

var { MongoClient } = require("mongodb");
var { Article } = require("../models/article.model");

router.getArticles = function (req, res) {
  MongoClient.connect(process.env.MONGODB_URI, function (err, db) {
    if (err) throw err;
    var dbo = db.db("PlantRadDB");
    dbo
      .collection("Articles")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.status(200).json({
          message: "Article objects successfully retrieved",
          articles: result,
        });
        db.close();
      });
  });
};

router.postArticles = function (req, res) {
  var article = new Article({
    edition: req.body.edition,
    title: req.body.title,
    author: req.body.author,
    imageSource: req.body.imageSource,
  });
  article.save(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = router;
