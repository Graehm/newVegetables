require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Vegetable = require('./models/vegetable')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('mongo DB is in the house')
})

// I.ndex
app.get('/vegetables', async (req, res) => {
    try {
        const foundVegetables = await foundVegetable.find()
        res.render('vegetables/Index', {
            vegetables: foundVegetables
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// N.ew
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})

// D.elete
app.delete('/vegetables/:id', async (req, res) => {
    try {
        await Vegetable.foundOneAndDelete({'_id': req.params.id})
            .then(() => {
                res.redirect('/vegetables')
            })
    } catch (error) {
        res.status(400).send({ message: error.message})
    }
})

// U.pdate
app.put('/vegetables/:id', async (req, res) => {
    if(req.body.readyToEat ==='on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    try {
        await Vegetable.findOneAndUpdate({ '_id': req.params.id },
            req.body, { new: true })
                .then(() => {
                    res.redirect(`/vegetables/${req.params.id}`)
                })
    } catch (error) {
        res.status(400).send({ message: error,message })
    }
})

// C.reate
app.post('/vegetables', async (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    try {
        const createVegetable = await Vegetable.create(req, res)
        res.redirect(`/vegetables/${createdVegetable._id}`)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// E.dit
app.get('/vegetables/:id/edit', async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findOne({'_id:': req.params.id})
        res.render('vegetables/Edit', {
            vegetable: foundVegetable
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// S.how
app.get('/vegetables/:id', async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findOne({_id: req.params.id})
        res.render('vegetables/Show', {
            vegetable: foundVegetable
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.listen(PORT, () => {
    console.log(`Now PORT ${PORT} shows up!`)
})