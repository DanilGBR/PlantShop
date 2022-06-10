const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin ,Content-Type, Authorization, X-Requested-With, Accept"
  );
  next();
});

app.use("/api/categories", (req, res, next) => {
  const categories = [
    {
      id: 1,
      description: "Jungle plants",
      imageSource:
        "https://i.pinimg.com/originals/41/ac/9e/41ac9e5df5d9078cc4eda620b505ee66.jpg",
    },
    {
      id: 2,
      description: "Outdoor plants",
      imageSource:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/drop-and-grow-succulent-and-flower-containers-thumbnail.jpg",
    },
    {
      id: 3,
      description: "Indoor plants",
      imageSource:
        "https://media1.popsugar-assets.com/files/thumbor/un4Xt_DfQCSW01MeEYwJ_5xdre4/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/02/02/990/n/1922794/40963e4b61fb09cd27a8e1.66367307_/i/Best-Large-Indoor-Plants.jpg",
    },
    {
      id: 4,
      description: "Bedroom plants",
      imageSource:
        "https://3fx71412cp4r3ww63o1u0did-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/indoorplants2-700x875.jpg",
    },
  ];

  res.status(200).json({
    MessageChannel: "Categories fetched successfully",
    categories: categories,
  });
});

module.exports = app;
