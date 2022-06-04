const User = require("./User");
const Activity = require("./Activity");
const Recs = require("./Recs");
const Goals = require("./Goals");

User.hasMany(Activity, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

User.hasMany(Goals, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

Activity.belongsTo(User, {
  foreignKey: "user_id",
});

Recs.belongsTo(User, {
  foreignKey: "user_id",
});

Goals.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Activity, Recs, Goals };
