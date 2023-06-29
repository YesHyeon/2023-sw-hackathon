const express = require("express");
const router = express.Router();
const searchController = require("../controllers/search/searchController");

const recommendController = require("../controllers/search/recommendController");
const { Hospital } = require("../models");
router.get("/recommend", recommendController.handleRecommend);
router.get("/recommendOne", recommendController.handleRecommendOne);
router.get("/makeHospital", async (req, res) => {
  await Hospital.create({
    name: "테스트병원",
    content: "테스트병원입니다.",
    tagFirst: "슬개골탈구",
    tagSecond: "수술",
    tagThird: "강아지",
    together: "이찬호",
    openHour: 9,
    closedHour: 18,
  });
  await Hospital.create({
    name: "테스트병원2",
    content: "테스트병원입니다.",
    tagFirst: "도마뱀",
    tagSecond: "슬개골탈구",
    tagThird: "중성화",
    together: "이찬호",
    openHour: 9,
    closedHour: 18,
  });
  await Hospital.create({
    name: "테스트병원3",
    content: "테스트병원입니다.",
    tagFirst: "슬개골탈구",
    tagSecond: "중성화",
    tagThird: "테스트2",
    together: "이찬호",
    openHour: 9,
    closedHour: 18,
  });
});
router.get("/", searchController.handleSearch);

module.exports = router;
