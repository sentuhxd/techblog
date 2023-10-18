const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');


// will use the middleware withAuth from the auth.js file 
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }, { model: Comment, include: [{ model: User }] }],
    })

    const posts = postData.map((postData) => postData.get({ plain: true }))

    res.render('homepage', {
      postData,
      // Pass the logged in flag to the template
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})


router.get('/login', (req, res) => {
 
  // if someone already has a session and havent logged out or had their cookies cleared you will be directed to the user registry page
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    })

    const posts = postData.map((post) => post.get({ plain: true }))

    res.render('dashboard', {
      posts,
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;
