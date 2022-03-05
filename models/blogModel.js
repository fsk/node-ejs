const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    blogTitle    : { type: String, required: "Title cannot be empty"},
    blogSubTitle : { type: String, required: "Subtitle cannot be empty"},
    blogAuthor   : { type: String, required: "Author cannot be empty"},
    blogImage    : { type: String, required: "Blog Image cannot be empty"},
    blogContent  : { type: String, required: "BlogContent cannot be empty"}
}, {
    timestamps: true
});


module.exports = mongoose.model("Blog", BlogSchema);