const User = require('./User');
const Hero = require('./Hero');

User.hasMany(Hero, {
  onDelete: 'CASCADE',
  foreignKey: 'user_id',
});

Hero.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Hero };
