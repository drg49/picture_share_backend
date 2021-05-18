const manyPosts = require("./seedData.json")
const mongoose = require("./connection")
const Post = require("../models/post")

const db = mongoose.connection

Post.deleteMany({}).then(() => {
    Post.insertMany(manyPosts).then((posts) => {
        console.log(posts)
        db.close()
    })
})