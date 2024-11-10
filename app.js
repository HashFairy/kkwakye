const express = require('express')
const app = express()
require('dotenv/config')
const  mongoose = require('mongoose')


const bodyParser = require('body-parser')
const postsRoute = require('./routes/posts')

app.use(bodyParser.json())
app.use('/posts', postsRoute)

app.get('/', (req,res) =>{
    res.send('Homepage, this is kofi')
})

mongoose.connect(process.env.DB_CONNECTOR, {

})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(3000,()=>{
    console.log('Server is up and running')
})