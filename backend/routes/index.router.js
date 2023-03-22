const express = require("express");
const router = express.Router();

const controlUser = require("../controllers/usersController");
const controlProducts = require("../controllers/productController");
const controlCategories = require("../controllers/categoryController");
const controlArticles = require("../controllers/articlesController");

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

router.get("/products", controlProducts.getProducts);
router.post("/addProducts", controlProducts.postProducts);
router.get("/featured", controlProducts.getFeaturedProducts);

router.get("/categories", controlCategories.getCategories);
router.post("/addCategories", controlCategories.postCategories);

router.get("/articles", controlArticles.getArticles);
router.post("/addArticles", controlArticles.postArticles);

module.exports = router;
