const express = require("express");
const router = express.Router();

router.getCategories = (req, res) => {
  const categories = [
    {
      category: "Jungle plants",
      imageSource:
        "https://i.pinimg.com/originals/41/ac/9e/41ac9e5df5d9078cc4eda620b505ee66.jpg",
    },
    {
      category: "Outdoor plants",
      imageSource:
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/drop-and-grow-succulent-and-flower-containers-thumbnail.jpg",
    },
    {
      category: "Indoor plants",
      imageSource:
        "https://media1.popsugar-assets.com/files/thumbor/un4Xt_DfQCSW01MeEYwJ_5xdre4/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/02/02/990/n/1922794/40963e4b61fb09cd27a8e1.66367307_/i/Best-Large-Indoor-Plants.jpg",
    },
    {
      category: "Bedroom plants",
      imageSource:
        "https://3fx71412cp4r3ww63o1u0did-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/indoorplants2-700x875.jpg",
    },
  ];

  res.status(200).json({
    MessageChannel: "Categories fetched successfully",
    categories: categories,
  });
};

router.getArticles = (req, res) => {
  const articles = [
    {
      edition: 1,
      author: "Jungle plants",
      title: "Jungle plants",
      image:
        "https://www.mydomaine.com/thmb/Ts6h_mVlXPwcs0WGbaPdkdJ5Bj8=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/buyingavintagemoroccanrug5-1fa45485cd104477b67fb80501d3c961.jpeg",
    },
    {
      edition: 2,
      author: "Outdoor plants",
      title: "Outdoor plants",
      image:
        "https://5.imimg.com/data5/WX/YO/LT/SELLER-90188891/house-plants-500x500.jpg",
    },
  ];
  res.status(200).json({
    MessageChannel: "Articles fetched successfully",
    articles: articles,
  });
};

router.getFeaturedProducts = (req, res) => {
  const featuredProducts = [
    {
      id: 1,
      description: "Hortensie",
      imageSource:
        "http://cdn.shopify.com/s/files/1/0109/7996/7072/products/44840-11-BAKIE.jpg?v=1641792985",
      price: "10",
    },
    {
      id: 2,
      description: "Ficus Benjamina",
      imageSource:
        "https://www.ikea.com/ro/ro/images/products/ficus-benjamina-natasja-planta-naturala-ficus-benjamina-natasja__0653996_pe708225_s5.jpg?f=s",
      price: "20",
    },
    {
      id: 3,
      description: "Perennial Succulent",
      imageSource:
        "https://cdn.britannica.com/11/202411-050-BF7B0DF0/Ornamental-Echeveria-succulents-in-cultivation.jpg",
      price: "10",
    },
  ];
  res.status(200).json({
    MessageChannel: "Featured Products fetched successfully",
    featuredProducts: featuredProducts,
  });
};

module.exports = router;
