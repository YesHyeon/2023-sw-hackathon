const Sequelize = require('sequelize');

module.exports = class Veterinarian extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            kakaoId:{ //kakao에서 넘어오는 아이디
                type: Sequelize.STRING(30),
                allowNull: false,

            },
            provider :{ //회원가입 방식 ex)'kakao'
                type: Sequelize.STRING(10),
                allowNull: true,

            },
            profile: {
                type:Sequelize.STRING(255),
                allowNull: true,
            },
            allowd:{
                type: Sequelize.BOOLEAN,
                allowNull: true
            }

        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Veterinarian',
            tableName: 'veterinarians',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Veterinarian.hasMany(db.Comment);
        db.Veterinarian.hasMany(db.Post);


    }
}