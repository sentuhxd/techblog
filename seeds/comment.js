const { Comment } = require('../models')

const commentInfo = [
    {
        comment_text: "SO cool!",
        user_id: 3,
        post_id: 4,
    },
    {
        comment_text: "SO cool!",
        user_id: 2,
        post_id: 3,
    },
    {
        comment_text: "SO cool!",
        user_id: 1,
        post_id: 4,
    },
    {
        comment_text: "SO cool!",
        user_id: 2,
        post_id: 5,
    },
];

const seedComments = () => Comment.bulkCreate(commentInfo);

module.exports = seedComments;