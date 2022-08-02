const express = require('express');
const mongoose = require('mongoose');

const {DB_URI, HOST, PORT} = require('./constants/configs');
const User = require('./databases/user.schema');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users)
})

app.post('/users', async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user)
})

mongoose.connect(DB_URI)
    .then(() => {
        console.log('MongoDB connected!!!');
        app.listen(+PORT, HOST, () => {
            console.log(`Server listened on ${PORT} port...`);
        })
    })
    .catch(err => {
        console.log('Something went wrong');
        console.log(err);
    })
