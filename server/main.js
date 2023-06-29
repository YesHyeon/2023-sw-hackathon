const { default: axios } = require("axios");
const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const run = async () => {
  // 크롬 드라이버 실행
  let driver = await new Builder().forBrowser("chrome").build();
  // headless로 크롬 드라이버 실행
  //   let driver = await new Builder()
  //     .forBrowser("chrome")
  //     .setChromeOptions(
  //       new chrome.Options()
  //         .headless()
  //         .addArguments("--disable-gpu", "window-size=1920x1080", "lang=ko_KR")
  //     )
  //     .build();

  try {
    const keyword = "파르베의원";
    const url = `https://map.naver.com/v5/search/${encodeURIComponent(
      keyword
    )}/place`;
    // 특정 URL 생성
    await driver.get(url);
    let userAgent = await driver.executeScript("return navigator.userAgent;");
    // 페이지 로딩 대기 url이 바뀔때까지 대기
    await driver.wait(async function () {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl != url;
    }, 5000);
    // 현재 페이지의 url 확인
    const hospitalUrl = await driver.getCurrentUrl();
    const regex = /place\/(\d+)/;
    const match = hospitalUrl.match(regex);
    const placeId = match[1];
    return await placeId;
  } catch (e) {
    console.log(e);
  } finally {
    driver.quit();
  }
};
(async () => {
  try {
    const placeId = await run(); // `run()` 함수를 호출하고 `placeId`를 해결
    const reviewUrl = `https://pcmap.place.naver.com/hospital/${placeId}/review/ugc`;
    console.log(reviewUrl);
    axios.get(reviewUrl).then((html) => {
      const regex = /"typeName":"블로그","url":"(.*?)"/g;
      const match = html.data.match(regex);
      const urls = match.map((url) => url.replace(/\\u002F/g, "/"));
      const blogUrls = urls.map((url) =>
        url.replace(/"typeName":"블로그","url":"/g, "").replace(/"/g, "")
      );
      console.log(blogUrls);
      //console.log(parsedString.replace(/\\u002F/g, "/"));
    });
  } catch (error) {
    console.error(error);
  }
})();
