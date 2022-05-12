// modern way of importing packages...requires adding ["type": "module"] in package.json file
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

// traditional way of importing packages
// const express = require('express');

const app = express();

// setting up the starting path for all the routes inside of the posts.js
// every post inside postRoutes is going to start with /posts
// this adds a prefix of /posts to all posts...which is helpful in URI design(?)
app.use('/posts', postRoutes);

// setting up the body parsers so we can properly send requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// connect server application with real database
// using the MongoDB cloud atlas -- database hosted on MongoDB cloud
// note that in a prod env, we do not want to have credentials shown as we have done below
//      later we will create environment variables where we will save creds
const CONNECTION_URL = 'mongodb+srv://memories_so:memories_so_pass@cluster0.xq9u6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4242; // ensure the port selected is not in use

// These options { useNewUrlParser: true, useUnifiedTopology: true } are no longer necessary
// Also, mongoose.set('useFindAndModify', false) is now depractated.
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));