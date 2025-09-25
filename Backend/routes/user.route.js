const express = require("express");
const {
  login,
  register,
  updateProfile,
  logout,
} = require("../controllers/user.controller");
const { isAuthenticated } = require("../middlewares/authenticate");
const { singleUpload } = require("../middlewares/multer");

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(singleUpload, login);

router
  .route("/profile/update")
  .post(isAuthenticated, singleUpload, updateProfile);

router.route("/logout").get(logout);


module.exports = router;
