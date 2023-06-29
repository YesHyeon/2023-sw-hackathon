const User = require("../../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const IssueToken = async (userInfo) => {
  const accessToken = jwt.sign(
    {
      userInfo: {
        id: userInfo.id,
        name: userInfo.name,
        kakaoId: userInfo.kakaoId,
        provider: userInfo.provider,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "10d" }
  );

  return { accessToken };
};

module.exports = { IssueToken };
