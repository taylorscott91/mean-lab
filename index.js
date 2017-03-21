const express = require('express')
const Meme = require('./db/models.js').Meme

const app = express()

app.set('view engine', 'hbs') //not needed for angular

app.get('/memes', (req, res) => {
  Meme.find({}, (err, memes) => {
    res.render('index', {memes})
  })
})

app.listen(3001, () => {
  console.log("we did it right on 3k1")
})
