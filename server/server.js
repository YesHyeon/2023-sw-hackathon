require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const logger = require("./config/logger");

const morganMiddleware = require("./utils/middleware/morgan");
const credentials = require("./utils/middleware/credentials");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const crawling = require("./controllers/crawling2").handleCrawling;

const PORT = process.env.PORT || 3000;

app.use(credentials);
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.use(morganMiddleware);
app.use("/api/hospital", async (req, res) => {
  const { lat, long, keyword, type } = req.query;
  var url =
    "http://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncLcinfoInqire";
  var queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=9ZhpN%2FoYdhTzJ11%2FvH37DdAjyeI5k5GC6d83bvQzQLnuUOXAYv81ljk196%2FXY0%2BC7Mf%2B51aLr7ck0fKxcXlb5g%3D%3D"; /* Service Key*/
  queryParams +=
    "&" + encodeURIComponent("WGS84_LON") + "=" + encodeURIComponent(lat);
  queryParams +=
    "&" + encodeURIComponent("WGS84_LAT") + "=" + encodeURIComponent(long);
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent(1);
  queryParams +=
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent(10);
  const response = await axios.get(url + queryParams);
  const hospitals = response.data.response.body.items.item;
  // 잠시 주석
  // hospital.filter((item) => {
  //   return item.dutyName.includes(type);
  // });
  const results = [];
  let count = 0;
  const maxLength = 100;
  for (let i = 0; i < hospitals.length; i++) {
    const reviews = await crawling(hospitals[i], keyword, type);
    if (reviews == null) {
      continue;
    }
    results.push({
      hospital: hospitals[i]["dutyName"],
      keyword: keyword,
      reviews: reviews,
    });
    count++;
    if (count == 3) {
      break;
    }
  }
  console.log(results);

  // nodeSummary.summarize(inputString, (summary) => {
  //   const summarizedString = summary.substring(0, maxLength);
  //   console.log(summarizedString); // Output: 요약된 문자열
  // });
});

app.use("/api/crawling", require("./routes/crawling"));

app.listen(PORT, () => logger.info(`Server is running on port ${PORT}`));
