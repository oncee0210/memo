
const express = require('express')
const app = express()
const port = 5000

const keys = require('./config/keys')
const mongoose = require('mongoose')

mongoose.connect(keys.mongoURI, {

}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', function (req, res) {
  res.send('Hello World')
})

//Notice Register


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
