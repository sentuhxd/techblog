const seedPosts = require('./post');
const seedComments = require('./comment')
const seedUsers = require('./user');


const sequelize = require('../config/connection');


const seedDb = async() => {
  await sequelize.sync({force: true});
  await seedUsers();
  await seedPosts();
  await seedComments();

  process.exit(0);

};

seedDb();
