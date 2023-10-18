const express = require("express");
const router = express.Router();
const { Post } = require("../../models");
const withAuth = require('../../utils/auth.js')

router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      comment: req.body.comment,
      date: req.body.date,
      user_id: req.session.user_id,
    })

    res.status(200).json(this.postData)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

router.put('/:id', withAuth, async (req, res) => {
  try {
    const postId = Post.update(req.body, {
      where: { id: req.params.id },
    })
    res.status(200).json(postId)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const posts = Post.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(posts)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})




module.exports = router