const Users = require('./users');
const Posts = require('./posts');
const Comments = require('./comments');


//Many posts belong to one user
Posts.belongsTo(Users, {
  foreignKey: 'user_id'

})

 //Post can have many comments
 Posts.hasMany(Comments, {
  foreignKey: 'post_id',
});

//Many comments can belong to one user
Comments.belongsTo(Users, {
  foreignKey: 'user_id'

})

module.exports = { Users, Posts, Comments };
