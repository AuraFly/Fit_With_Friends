const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Friends extends Model {}

Friends.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    friend_status: {
      type: DataTypes.ENUM("Yes", "No", "Pending"),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Friends",
  }
);

module.exports = Friends;
