var mongoose = require("mongoose");
var Item = mongoose.model("Item");

module.exports.enterNewItem = function (req, res) {
  console.log("I reached at item controller");
  var item = new Item();

  item.name = req.body.name;
  item.cat = req.body.cat;
  item.price = req.body.price;
  item.description = req.body.description;
  item.image = req.body.image;

  item.save(function (err) {
    res.status(200);
    res.json({
      msg: "item entered successfully",
    });
  });
};
