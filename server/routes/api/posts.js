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
      //console.log(post)
    } else {
      res.status(500).send({ success: false, err });
      //console.log(err);
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

router.delete('/:_id', (req,res,next) => {
    Post.findOneAndDelete({_id: req.params._id}, (err, data) => {
        if(!err) res.send({success: true})
        else res.send({success:false, payload: err})
    })
})

router.put('/:id', (req,res,next) => {
    Post.findOneAndUpdate({_id: req.params._id}, {$set: {title: req.body.title, content: req.body.comment}}, (err, doc, res) => {
        console.log('err')
        console.log(err);
        console.log('doc');
        console.log(doc);
        console.log('res');
        console.log(res);
    })

})

module.exports = router;
