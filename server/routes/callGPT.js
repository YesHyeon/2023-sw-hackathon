require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
//파파고 api 받아와서 영어로 돌리고 gpt 한테 넣고 영어로 받아서 파파고로 한국어로 돌리기

const callChatGPT = async (prompt) => {
  const configuration = new Configuration({
    apiKey: process.env.OpenAIApi,
  });
  try {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `역할 부여/너는 병원 전문 리뷰어다./너는 모든 의학 지식에 해박한 전문가이다.-너는 지금부터 특정 질병에 대한 치료나 처방을 얼마나 잘하는 지 병원 후기를 보고 분석할 것이다.-hopital은 병원 이름, keyword는 특정 치료 혹은 질병을 뜻하고, reviews는 병원에 대한 리뷰이다.-review를 보고 사용자들의 반응을 판단하고 0부터 100점의 점수를 부여한다.긍정적인 반응이 많을 수록 높다.- 예시 데이터 값: {'hospital':'한아름 정형외과','keyword':'골절','review':['아이가 친구들이랑 축구를 하다가 넘어져서 골절을 당해 너무 속상하네요. 한달이나 깁스를 해야한다고 해서 너무 속상하면서 화가나네요','항상 선생님이 친절하셔서 좋아요','여기 금간거 부러진거 치료 최악이에요. 비싼 검사 진짜 다 하라고합니다']}.-대답해야하는 것은 다음과 같다.장점,단점,keyword에 대한 긍정부정,점수.- 다음과 같은 형식으로 대답해라. 형식을 무조건 지켜라.{"장점":"친절하고좋아요","단점":"가격이 비싸요","keyword긍정부정":"물리치료를 잘해요","점수":"85"}`,
        },
        {
          role: "system",
          content: prompt,
        },
      ],
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling ChatGPT API:", error);
    return null;
  }
};

module.exports = { callChatGPT };
