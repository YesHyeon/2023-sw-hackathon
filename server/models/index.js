const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;


const User = require('./user');
const Hospital = require('./hospital');
const Comment = require('./comment');
const Veterinarian = require('./veterinarian');
const Post = require('./post');


db.User = User;
db.Hospital = Hospital;
db.Comment=Comment;
db.Veterinarian = Veterinarian;
db.Post=Post;

User.init(sequelize);
Hospital.init(sequelize);
Comment.init(sequelize);
Veterinarian.init(sequelize);
Post.init(sequelize);

User.associate(db);
Hospital.associate(db);
Comment.associate(db);
Veterinarian.associate(db);
Post.associate(db);

module.exports = db;