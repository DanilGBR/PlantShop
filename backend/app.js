const express = require("express");

const app = express();

app.use((req, res, next) => {
  next();
});

app.use("/api/categories", (req, res, next) => {
  const categories = [
    {
      id: 1,
      description: "Jungle plants",
      imageSource: "../../../../assets/categories/plant-jungle.jpg",
    },
    {
      id: 2,
      description: "Outdoor plants",
      imageSource: "../../../../assets/categories/plant-outdoor.jpg",
    },
    {
      id: 3,
      description: "Indoor plants",
      imageSource: "../../../../assets/categories/plant-indoor.jpg",
    },
    {
      id: 4,
      description: "Bedroom plants",
      imageSource: "../../../../assets/categories/plant-bedroom.jpg",
    },
  ];

  res.status(200).json({
    MessageChannel: "Categories fetched successfully",
    categories: categories,
  });
});

module.exports = app;
