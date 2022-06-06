const User = require("./User");
const Activity = require("./Activity");
const Goals = require("./Goals");
const Comments = require("./Comments");

User.hasMany(Activity, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Goals, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Activity.hasMany(Comments, {
  foreignKey: "activity_id",
});

Activity.belongsTo(User, {
  foreignKey: "user_id",
});

Goals.belongsTo(User, {
  foreignKey: "user_id",
});

Comments.belongsTo(Activity, {
  foreignKey: "activity_id",
});

module.exports = { User, Activity, Goals, Comments };
