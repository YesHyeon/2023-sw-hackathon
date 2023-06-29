const axios = require("axios");
const { Veterinarian } = require("../../models");

const handleKakaoLogin = async (req, res) => {
  return res.redirect(
    `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI2}`
  );
};
const handleKakaoLoginCallback = async (req, res) => {
  const CODE = req.query.code;
  const ID = process.env.KAKAO_KEY;
  const REDIRECT_URI = process.env.KAKAO_REDIRECT_URI2;
  const getTokenURL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${ID}&redirect_uri=${REDIRECT_URI}&code=${CODE}`;
  const getUserInfoURL = `https://kapi.kakao.com//v2/user/me`;
  try {
    // 토큰 발급받기
    const tokenResponse = await axios.post(getTokenURL, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const accessToken = tokenResponse.data.access_token;

    /**토큰이 발급 된다면, 해당 토큰을 통해 유저가 서비스에 가입되어있는지 확인한다.*/
    if (accessToken) {
      const userInfoResponse = await axios.get(getUserInfoURL, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // kakaoId로 유저를 찾는다.
      let foundUser = await Veterinarian.findOne({
        where: {
          kakaoId: userInfoResponse.data.id,
          provider: "kakao",
        },
      });
      // 유저가 없다면 새로 생성한다.
      // 새로 만들어서 해당 유저를 foundUser로 만들기.
      if (!foundUser) {
        foundUser = Veterinarian.create({
          kakaoId: userInfoResponse.data.id,
          name: userInfoResponse.data.kakao_account.profile.nickname,
          provider: "kakao",
          profile: userInfoResponse.data.properties.profile_image,
          allowd: false,
        });
      }

      const tokens = await IssueToken(foundUser);

      return res.status(200).json({
        status: 200,
        success: true,
        message: "성공적인 로그인",
        accessToken: tokens.accessToken,
      });
    }
  } catch (error) {}
};

module.exports = { handleKakaoLogin, handleKakaoLoginCallback };
