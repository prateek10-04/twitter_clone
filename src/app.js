const express= require('express')
require('./db/mongoose')


const app=express();
const tweetRouter = require('./routes/tweet')
const userRouter = require('./routes/user')

app.use(express.json());

app.use(tweetRouter)
app.use(userRouter)
module.exports=app;