const sequelize = require("../config/connection");
const { User, Activity } = require("../models");

const userData = require("./userData.json");
const activityData = require("./ActivityData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const Activity of ActivityData) {
    await Activity.create({
      ...Activity,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
