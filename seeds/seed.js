const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userInfo = require("./userInfo.json");
const postInfo = require("./postInfo.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userInfo, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postInfo) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();