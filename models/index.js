const Users = require('./users');
const Posts = require('./posts');
const Comments = require('./comments');


//Users can have many posts
Users.hasMany(Posts, {
   foreignKey: 'user_id',
 });

 //posts can have many comments
 Posts.hasMany(Comments, {
  foreignKey: 'post_id',
});


module.exports = { Users, Posts, Comments };
