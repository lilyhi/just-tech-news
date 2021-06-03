// import all models
const User = require('./User');
const Post = require('./Post');

// create assocations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// reverse assocation
Post.belongsTo(User, {
  foreignKey: 'user_id',
});



module.exports = { User, Post };