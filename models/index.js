const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');



Users.hasMany(Posts, {
   foreignKey: 'user_id',
 });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

module.exports = { Users, Posts, Comments };
