const sequelize = require("../config/connection");
const { User, Activity, Goals, Comments } = require("../models");

const userData = require("./userData.json");
const activityData = require("./ActivityData.json");
const goalsData = require("./goalsData.json");
const commentsData = require("./commentsData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const activities = 6;

  for (const activity of activityData) {
    await Activity.create({
      ...activity,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const goals of goalsData) {
    await Goals.create({
      ...goals,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comments of commentsData) {
    await Comments.create({
      ...comments,
      activity_id: activities[Math.floor(Math.random() * activities.length)],
    });
  }

  process.exit(0);
};

seedDatabase();
