const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title:{
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            content: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            tagFirst: { //1
                type: Sequelize.STRING(25),
                allowNull: true,
            },
            tagSecond: { //2
                type: Sequelize.STRING(25),
                allowNull: true,
            },
            tagThird: { //3
                type: Sequelize.STRING(25),
                allowNull: true,
            },
            species: { //종, 선택형
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            detailSpecies: { //세부 종, 직접 입력
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            views:{ //조회수
                type:Sequelize.INTEGER,
                allowNull: true
            },
            type:{ //vet, user
                type:Sequelize.STRING(100),
                allowNull: true
            },



        },{
            sequelize,
            timestamps: true,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Post.belongsTo(db.User);
        db.Post.belongsTo(db.Veterinarian);
        db.Post.hasMany(db.Comment);

    }
}