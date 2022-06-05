const sequelize = require("../config/connection");
const { User, Activity, Goals } = require("../models");

const userData = require("./userData.json");
const activityData = require("./ActivityData.json");
const goalsData = require("./goalsData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const activity of activityData) {
    await Activity.create({
      ...activity,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });

    for (const goals of goalsData) {
      await Goals.create({
        ...goals,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
  }

  process.exit(0);
};

seedDatabase();
