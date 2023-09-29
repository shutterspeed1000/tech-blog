const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');



// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

module.exports = { Users, Posts, Comments };
