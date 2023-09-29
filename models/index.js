const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');


//Users can have many posts
Users.hasMany(Posts, {
   foreignKey: 'user_id',
 });

 //posts can have many comments
 Posts.hasMany(Comments, {
  foreignKey: 'post_id',
});


module.exports = { Users, Posts, Comments };
