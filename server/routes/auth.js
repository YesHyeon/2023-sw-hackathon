const express = require("express");
const router = express.Router();
const kakaoUserLoginController = require("../controllers/auth/kakaoUserLoginController");
const kakaoVetLoginController = require("../controllers/auth/kakaoVetLoginController");

// kakao 로그인
router.get("/kakaoUser", kakaoUserLoginController.handleKakaoLogin);
router.get(
  "/kakaoUser/callback",
  kakaoUserLoginController.handleKakaoLoginCallback
);

//kakao-수의사 로그인
router.get("/kakaoVet", kakaoVetLoginController.handleKakaoLogin);
router.get(
  "/kakaoVet/callback",
  kakaoVetLoginController.handleKakaoLoginCallback
);

module.exports = router;
