import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';

import useStyles from './styles'; 

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });
    const classes = useStyles();
    const handleSubmit = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField 
                    name="creator" 
                    variant="outline" 
                    label="Creator" 
                    fillWidth 
                    value={postData.creator} 
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })} // keeps postdata and allows change in `creator`
                />
                <TextField 
                    name="title" 
                    variant="outline" 
                    label="Title" 
                    fillWidth 
                    value={postData.title} 
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })} // keeps postdata and allows change in `title`
                />
                <TextField 
                    name="message" 
                    variant="outline" 
                    label="Message" 
                    fillWidth 
                    value={postData.message} 
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })} // keeps postdata and allows change in `message`
                />
                <TextField 
                    name="tags" 
                    variant="outline" 
                    label="Tags" 
                    fillWidth 
                    value={postData.tags} 
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })} // keeps postdata and allows change in `tags`
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
            </form>
        </Paper>
    );
}

export default Form;