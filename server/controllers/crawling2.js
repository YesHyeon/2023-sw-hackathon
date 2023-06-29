const { default: axios } = require("axios");
const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const cheerio = require("cheerio");

//require("chromedriver");
const run = async (hospital, keyword, type) => {
  console.log(hospital, keyword, type);
  // // 크롬 드라이버 실행
  // let driver = await new Builder().forBrowser("chrome").build();
  //headless로 크롬 드라이버 실행
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(
      new chrome.Options()
        .headless()
        .addArguments(
          "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.20 Safari/537.36"
        )
    )
    .build();

  try {
    const searchName =
      hospital["dutyName"] +
      " " +
      hospital["dutyAddr"].split(" ")[0] +
      " " +
      hospital["dutyAddr"].split(" ")[1];
    const url = `https://map.naver.com/v5/search/${encodeURIComponent(
      searchName
    )}/place`;
    console.log(searchName);
    // 특정 URL 생성
    await driver.get(url);
    // 페이지 로딩 대기 url이 바뀔때까지 대기
    await driver.wait(async function () {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl != url;
    }, 10000);
    // 현재 페이지의 url 확인
    const hospitalUrl = await driver.getCurrentUrl();
    const regex = /place\/(\d+)/;
    const match = hospitalUrl.match(regex);
    const placeId = match[1];
    return await placeId;
  } catch (e) {
  } finally {
    driver.quit();
  }
};
const handleCrawling = async (hospital, keyword, type) => {
  try {
    const placeId = await run(hospital, keyword, type); // `run()` 함수를 호출하고 `placeId`를 해결
    const reviewUrl = `https://pcmap.place.naver.com/hospital/${placeId}/review/ugc`;
    console.log(reviewUrl);
    const html = await axios.get(reviewUrl);
    const regex = /"typeName":"블로그","url":"(.*?)"/g;
    const match = html.data.match(regex);
    const urls = match.map((url) => url.replace(/\\u002F/g, "/"));
    const blogUrls = urls.map((url) =>
      url.replace(/"typeName":"블로그","url":"/g, "").replace(/"/g, "")
    );
    const reviews = [];
    for (let i = 0; i < Math.min(blogUrls.length, 3); i++) {
      const html = await axios.get(blogUrls[i]);
      const $ = cheerio.load(html.data);
      let text = $("div.se-main-container").text();
      text = text.replace(/\s\s/g, "");
      text = text.replace(/\n/g, "");
      reviews.push(text);
    }
    // const reviews = await Promise.all(
    //   blogUrls.map(async (url) => {
    //     const html = await axios.get(url);
    //     const $ = cheerio.load(html.data);
    //     let text = $("div.se-main-container").text();
    //     text = text.replace(/\s\s/g, "");
    //     text = text.replace(/\n/g, "");
    //     return text;
    //   })
    // );
    return reviews;
    // const html2 = await axios.get(blogUrls[0]);
    // const $ = cheerio.load(html2.data);
    // let text = $("div.se-main-container").text();
    // text = text.replace(/\s\s/g, "");
    // text = text.replace(/\n/g, "");
    // console.log(text);
    // blogUrls.forEach((url) => {
    //   axios.get(url).then((html) => {
    //     console.log(html.data);
    //   });
    // });
  } catch (error) {
    return null;
  }
};

module.exports = { handleCrawling };
