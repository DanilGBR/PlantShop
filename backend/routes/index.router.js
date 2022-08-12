const express = require("express");
const router = express.Router();

const controlUser = require("../controllers/usersController");
const controlRawData = require("../controllers/rawDataController");
const controlProducts = require("../controllers/productController");

router.use((req, res, next) => {
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

router.post("/auth/register", controlUser.register);
router.post("/auth/login", controlUser.login);
router.post("/auth/reset-password", controlUser.resetPassword);
router.post("/auth/verify", controlUser.verify);

router.get("/categories", controlRawData.getCategories);
router.get("/articles", controlRawData.getArticles);
router.get("/featured", controlRawData.getFeaturedProducts);

router.get("/products", controlProducts.getProducts);
router.post("/addProducts", controlProducts.postProducts);

module.exports = router;
