const { Post } = require('../models');

const postInfo = [
    {
        title: "wawdada",
        content: "sdiowedjjs",
        user_id: 1
    },
    {
        title: "sdksd",
        content: "sd0isiijdji",
        user_id: 2
    },
    {
        title: "sdsd",
        content: "cmxkmmckmkmk",
        user_id: 1
    },
    {
        title: "ssdasdad",
        content: "asdadadadada",
        user_id: 4
    },
    {
        title: "sdasdadadad",
        content: "dadadasaswdfff",
        user_id: 5
    },
    {
        title: "fhhgghfdfs",
        content: "dsdsadas",
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postInfo);

module.exports = seedPosts;