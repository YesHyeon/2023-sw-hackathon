const { Post } = require("../../models");
const { Op } = require("sequelize");

// 검색
const handleSearch = async (req, res) => {
  const keyword = req.query.keyword;
  console.log(keyword);
  try {
    //본문이나 제목에 keyword가 포함된 포스트를 찾는다.
    const foundPosts = await Post.findAll({
      attributes: ["id", "title", "content", "createdAt"],
      where: {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            content: {
              [Op.like]: `%${keyword}%`,
            },
          },
        ],
      },
    });
    console.log(foundPosts);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "성공적인 검색",
      data: foundPosts,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "서버 에러",
    });
  }
};

module.exports = { handleSearch };
