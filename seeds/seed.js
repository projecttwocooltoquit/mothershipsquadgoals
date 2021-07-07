const sequelize = require('../config/connection');
const { User, Hero } = require('../models');

const userData = require('./userData.json');
const heroData = require('./heroData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const hero of heroData) {
    await Hero.create({
      ...hero,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
