const express = require('express')
const router = express.Router()

const Posts = require('../models/Post')


router.post('/', async(req, res) =>{

    const postData = new Posts({
        user:req.body.user,
        title:req.body.title,
        text:req.body.text,
        hashtag:req.hashtag.hashtag,
        location:req.body.location,
        url:req.body.url
    })
    try{
        const postToSave = await postData.save()
        res.send(postToSave)
    }catch (err) {
        res.send({message:err})
    }
})

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find(); // Fetch all posts
        res.send(posts);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});


router.patch('/:postId', async(req,res) =>{
    try{
        const updatePostById = await Posts.updateOne(
            {_id:req.params.postId},
            {$set:{
                    user:req.body.user,
                    title:req.body.title,
                    text:req.body.text,
                    hashtag:req.body.hashtag,
                    location:req.body.location,
                    url:req.body.url
                }
            })
        res.send(updatePostById)
    }catch(err){
        res.send({message:err})
    }
})

router.delete('/:postId',async(req,res)=>{
    try{
        const deletePostById = await Posts.deleteOne({_id:req.params.postId})
        res.send(deletePostById)
    }catch(err){
        res.send({message:err})
    }
})

module.exports = router