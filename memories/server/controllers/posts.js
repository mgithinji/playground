// creating all the handlers for our routes
// we will have req, res args in every call back function of our routes

import PostMessage from "../models/postMessage.js";

// we make this function async because finding something takes time
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find(); // async fn so we add await
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}