const mongoose = require("mongoose")

const Schema = mongoose.Schema
const model = mongoose.model

const postSchema = new Schema(
    {
        name: String,
        img: String,
        body: String
    },
    { timestamps: true }
)

const Post = model("Post", postSchema)

module.exports = Post