const router = require("express").Router()

const { Router } = require("express")

const Post = require("../models/post")

///GET/// Note: Try block catches errors
router.get("/", async (req, res) => {
    try{
        const posts = await Post.find({})
        res.json(posts)
    } catch (error) {
        res.status(400).json(error)
    }
})

///CREATE///
router.post("/", async (req, res) => {
    try {
        const newPost = await Post.create(req.body)
        res.json(newPost)
    } catch (error) {
        res.status(400).json(error)
    }
})

///UPDATE///
router.put("/:id", async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(updatedPost)
    } catch (error) {
        res.status(400).json(error)
    }
})

///DELETE///
router.delete("/:id", async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id)
        res.json(deletedPost)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router