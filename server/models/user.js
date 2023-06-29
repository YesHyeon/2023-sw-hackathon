const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        kakaoId: {
          //kakao에서 넘어오는 아이디
          type: Sequelize.STRING(100),
        },
        provider: {
          //회원가입 방식 ex)'kakao'
          type: Sequelize.STRING(10),
          allowNull: true,
        },
        profile: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Comment);
    db.User.hasMany(db.Post);
  }
};
