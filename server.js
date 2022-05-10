const express = require('express');
const app = express()

const posts = [
    {
        username: 'Kim',
        title: '게시물 1'
    },
    {
        useranme: 'Park',
        title: '게시물 2'
    }
]

app.get('/posts',(req,res) => {
    res.json(posts)
})

app.listen(3000);