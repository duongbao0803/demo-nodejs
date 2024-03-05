const express = require("express");
const {
  postCreateUser,
  getHomePage,
  getHomeList,
  getUpdatePage,
  getDeletePage,
  postEditUser,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/usermanagement", getHomeList);
router.post("/create-user", postCreateUser);
router.get("/update/:id", getUpdatePage);
router.post("/edit-user/:id", postEditUser);
router.get("/delete/:id", getDeletePage);

module.exports = router;
