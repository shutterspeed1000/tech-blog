const Users = require('./users');
const Posts = require('./posts');
const Comments = require('./Comments');


//Many posts belong to one user
Posts.belongsTo(Users, {
  foreignKey: 'user_id',
  allowNull: false,
  onDelete: "CASCADE"
})

Posts.hasMany(Comments, {
  foreignKey: 'post_id',
  onDelete: "CASCADE",
  allowNull: false
});

//Many comments can belong to one user
Comments.belongsTo(Users, {
  foreignKey: 'user_id',
  allowNull: false,
  onDelete: "CASCADE"
})

module.exports = { Users, Posts, Comments };
