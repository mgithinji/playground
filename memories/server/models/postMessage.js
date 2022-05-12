// mongoose allow us to have some uniformiity in our documents

import mongoose from "mongoose";

// creating a mongoose schema
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// turning our schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

// we are exporting a mongoose model from the PostMessage file
// from which we'll be able to later run commands like find, create, delete, etc.
export default PostMessage;