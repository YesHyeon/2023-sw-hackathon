const Sequelize = require("sequelize");

module.exports = class Hospital extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        tagFirst: {
          //1
          type: Sequelize.STRING(25),
          allowNull: true,
        },
        tagSecond: {
          //2
          type: Sequelize.STRING(25),
          allowNull: true,
        },
        tagThird: {
          //3
          type: Sequelize.STRING(25),
          allowNull: true,
        },
        openHour: {
          //오픈 시간 숫자로 저장했다가 정보를 뿌려줄 때 그때 시간이랑 이거랑 비교해서 영업중인지 영업붕이 아닌지 뿌려줌
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        closedHour: {
          //종료 시간
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        together: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        latitude: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        longitude: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Hospital",
        tableName: "hospitals",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Hospital.hasMany(db.Veterinarian);
  }
};
