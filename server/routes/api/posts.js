const router = require('express').Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');

//TODO: implement PUT

router.get('/', (req,res) => {
    Post.find({}, (err, posts) => {
        if(!err) res.send({success: true, payload: posts})
        else res.status(500).send({success:false, err});
    })
})

router.get('/:id', (req,res) => {
    Post.findOne({id: req.params.id}, (err, post) => {
        if(!err) res.send({success: true, payload: post})
        else res.status(500).send({success:false, err});
    })
});

router.post('/', (req,res) => {
    console.log('creating new post...')
    const {title, content, dateCreated, id, author} = req.body;
    const newPost = new Post({
        title, content, dateCreated, id, author
    })
    newPost.save((err, post) => {
        if(!err) res.send({success:true});
        else res.status(500).send({success: false, err})
    })
})


module.exports = router;