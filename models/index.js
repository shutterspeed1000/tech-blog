const Users = require('./users');
const Posts = require('./posts');
const Comments = require('./Comments');


//Many posts belong to one user
Posts.belongsTo(Users, {
  foreignKey: 'user_id',
  allowNull: false,
})

 //Post can have many comments
 Comments.belongsTo(Posts, {
  foreignKey: 'post_id',
  allowNull: false,
});

//Many comments can belong to one user
Comments.belongsTo(Users, {
  foreignKey: 'user_id',
  allowNull: false,
})

module.exports = { Users, Posts, Comments };
