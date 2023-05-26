require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const PORT = process.env.PORT || 3000

const app = express()

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('Youre connected bitchhhhhh')
})

app.use(express.urlencoded({ extended: true}))
app.set('view engine','jsx')
app.engine('jsx',jsxEngine())

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})

app.listen(PORT, () => {
    console.log(`You're listening on Port ${PORT}!`)
})