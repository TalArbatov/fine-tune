const router = require("express").Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");

//TODO: implement PUT

router.get("/", (req, res) => {
  Post.find({}, (err, posts) => {
    if (!err) res.send({ success: true, payload: posts });
    else res.status(500).send({ success: false, err });
  });
});

router.get("/:_id", (req, res) => {
  console.log(req.params);
  Post.findOne({ _id: req.params._id }, (err, post) => {
    if (!err) {
      res.send({ success: true, payload: post });
      console.log(post)
    } else {
      res.status(500).send({ success: false, err });
      console.log(err);
    }
  });
});

router.post("/", (req, res) => {
  console.log("creating new post...");
  const { title, content, dateCreated, id, author } = req.body;
  const newPost = new Post({
    title,
    content,
    dateCreated,
    id,
    author
  });
  newPost.save((err, post) => {
    if (!err) res.send({ success: true });
    else res.status(500).send({ success: false, err });
  });
});

module.exports = router;
