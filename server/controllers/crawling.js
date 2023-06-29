const { default: axios } = require("axios");
const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const cheerio = require("cheerio");

//require("chromedriver");
const run = async (hospitals, keyword, type) => {
  console.log(hospitals, keyword, type);
  // 크롬 드라이버 실행
  let driver = await new Builder().forBrowser("chrome").build();
  //headless로 크롬 드라이버 실행
  //   let driver = await new Builder()
  //     .forBrowser("chrome")
  //     .setChromeOptions(
  //       new chrome.Options()
  //         .headless()
  //         .addArguments(
  //           "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.20 Safari/537.36"
  //         )
  //     )
  //     .build();
  const result = await Promise.all(
    hospitals.map(async (hospital) => {
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
        console.log(hospitalUrl);
        const regex = /place\/(\d+)/;
        const match = hospitalUrl.match(regex);
        const placeId = match[1];
        const reviewUrl = `https://pcmap.place.naver.com/hospital/${placeId}/review/ugc`;
        const reviews = await axios.get(reviewUrl).then(async (html) => {
          const regex = /"typeName":"블로그","url":"(.*?)"/g;
          const match = html.data.match(regex);
          const urls = match.map((url) => url.replace(/\\u002F/g, "/"));
          const blogUrls = urls.map((url) =>
            url.replace(/"typeName":"블로그","url":"/g, "").replace(/"/g, "")
          );
          // axios.get(blogUrls[0]).then((html) => {
          //   const $ = cheerio.load(html.data);
          //   let text = $("div.se-main-container").text();
          //   text = text.replace(/\s\s/g, "");
          //   text = text.replace(/\n/g, "");
          //   console.log(text);
          // });
          const reviews = await Promise.all(
            blogUrls.map(async (url) => {
              await axios.get(url).then((html) => {
                const $ = cheerio.load(html.data);
                let text = $("div.se-main-container").text();
                text = text.replace(/\s\s/g, "");
                text = text.replace(/\n/g, "");
                return text;
              });
            })
          );
          return reviews;
        });
        return {
          hospital: hospital["dutyName"],
          keyword: keyword,
          reviews: reviews,
        };
      } catch (e) {
        console.log(e);
      }
    })
  );
  driver.quit();
  return result;
};
const handleCrawling = async (hospitals, keyword, type) => {
  try {
    const result = await run(hospitals, keyword, type); // `run()` 함수를 호출하고 `placeId`를 해결
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { handleCrawling };
