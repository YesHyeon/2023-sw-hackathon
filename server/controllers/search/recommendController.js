const Hospital = require("../../models/hospital");
const { Op } = require("sequelize");

const extractTags = async () => {
  const tags1 = await Hospital.aggregate("tagFirst", "DISTINCT", {
    plain: false,
  });
  const tags2 = await Hospital.aggregate("tagSecond", "DISTINCT", {
    plain: false,
  });
  const tags3 = await Hospital.aggregate("tagThird", "DISTINCT", {
    plain: false,
  });
  const concatTags = tags1.concat(tags2.concat(tags3));
  const tags = concatTags.map((tag) => tag.DISTINCT);
  const uniqTags = [...new Set(tags)];
  return uniqTags;
};
const handleRecommend = async (req, res) => {
  const keyword = req.query.keyword;
  console.log(keyword);
  try {
    const tags = await extractTags();
    const includeTags = tags.filter((tag) => keyword.includes(tag));
    console.log(includeTags);
    // tage가 포함된 병원들을 찾는다.
    const foundHospitals = await Hospital.findAll({
      attributes: ["id", "name", "content", "createdAt"],
      where: {
        [Op.or]: [
          {
            tagFirst: {
              [Op.in]: includeTags,
            },
          },
          {
            tagSecond: {
              [Op.in]: includeTags,
            },
          },
          {
            tagThird: {
              [Op.in]: includeTags,
            },
          },
        ],
      },
    });
    return res.status(200).json({
      status: 200,
      success: true,
      message: "성공적인 검색",
      data: foundHospitals,
    });
  } catch (e) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "서버 에러",
    });
  }
};
const handleRecommendOne = async (req, res) => {
  const keyword = req.query.keyword;
  console.log(keyword);
  try {
    const tags = await extractTags();
    const includeTags = tags.filter((tag) => keyword.includes(tag));
    console.log(includeTags);
    // tag 중 가장 많은 1개의 태그로 검색
    const result = await Promise.all(
      includeTags.map((tag) => {
        const count = Hospital.count({
          where: {
            [Op.or]: [
              {
                tagFirst: tag,
              },
              {
                tagSecond: tag,
              },
              {
                tagThird: tag,
              },
            ],
          },
        });
        return count;
      })
    );
    const maxIndex = result.indexOf(Math.max(...result));
    const maxTag = includeTags[maxIndex];
    console.log(maxTag);

    const foundHospitals = await Hospital.findAll({
      attributes: ["id", "name", "content", "createdAt"],
      where: {
        [Op.or]: [
          {
            tagFirst: maxTag,
          },
          {
            tagSecond: maxTag,
          },
          {
            tagThird: maxTag,
          },
        ],
      },
    });
    return res.status(200).json({
      status: 200,
      success: true,
      message: "성공적인 검색",
      data: foundHospitals,
      maxTag: maxTag,
    });
  } catch (e) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "서버 에러",
    });
  }
};

module.exports = { handleRecommend, handleRecommendOne };
