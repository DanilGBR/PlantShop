const express = require("express");
const router = express.Router();

const controlUser = require("../controllers/usersController");
const controlRawData = require("../controllers/rawDataController");

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
router.get("/auth/verify", controlUser.verify);

router.get("/categories", controlRawData.getCategories);
router.get("/articles", controlRawData.getArticles);

module.exports = router;
