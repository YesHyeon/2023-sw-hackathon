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
const { callChatGPT } = require("./routes/callGPT");

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
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent(20);
  const response = await axios.get(url + queryParams);
  let hospitalse = response.data.response.body.items.item;
  //잠시 주석
  const hospitals = hospitalse.filter((item) => {
    console.log(item);
    return item.dutyName.includes(type);
  });
  console.log(hospitals);
  const results = [];
  let count = 0;
  for (let i = 0; i < hospitals.length; i++) {
    const reviews = await crawling(hospitals[i], keyword, type);
    if (reviews == null) {
      continue;
    }
    results.push({
      hospital: hospitals[i]["dutyName"],
      distance: `${hospitals[i]["distance"]}km`,
      latitude: hospitals[i]["latitude"],
      longitude: hospitals[i]["longitude"],
      location: hospitals[i]["dutyAddr"],
      keyword: keyword,
      reviews: reviews,
    });
    count++;
    if (count == 3) {
      break;
    }
  }
  const data = [];
  for (let i = 0; i < results.length; i++) {
    const response2 = await callChatGPT(JSON.stringify(results[i]));
    console.log(response2);
    results[i].response = JSON.parse(response2);
    data.push({
      hospitals: results[i].hospital,
      distance: results[i].distance,
      grade: results[i].response["점수"],
      location: results[i].location,
      review: `장점 : ${results[i].response["장점"]} \n단점 ${results[i].response["단점"]}`,
      latitude: results[i].latitude,
      longitude: results[i].longitude,
    });
  }
  console.log(data);
  return res.json({ data: data });
  //const response2 = await callChatGPT(JSON.stringify(prompt[0]));
  // if (response2) {
  //   console.log(response2);
  //   res.json({ response: response2 });
  // } else {
  //   res.status(500).json({ error: "Failed to get response from ChatGPT API" });
  // }
});

app.use("/api/crawling", require("./routes/crawling"));

app.listen(PORT, () => logger.info(`Server is running on port ${PORT}`));
