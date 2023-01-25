const express = require('express')

const { handle404 } = require('../lib/custom-errors')

const Gun = require('../models/gun')

const router = express.Router()

//Index
//Get /guns
router.get('/guns', (req, res, next) => {
    Gun.find()
        .then(guns => {
            return guns.map(gun => gun)
        })
        .then(guns => {
            res.status(200).json({ guns: guns })
        })
        .catch(next)
})

//Show
//Get /guns/:id
router.get('/guns/:id', (req, res, next) => {
    Gun.findById(req.params.id)
        .then(handle404)
        .then(gun => {
            res.status(200).json({ gun: gun })
        })
        .catch(next)
})

//Create
//Post /guns
router.post('/guns', (req, res, next) => {
    Gun.create(req.body.gun)
        .then(gun => {
            res.status(201).json({ gun: gun })
        })
        .catch(next)
})

// Update
// Patch /gun/:id
router.patch('/guns/:id', (req, res, next) => {
    Gun.findById(req.params.id)
        .then(handle404)
        .then(gun => {
            return gun.updateOne(req.body.gun)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// Delete
// Delete /guns/:id
router.delete('/guns/:id', (req, res, next) => {
    Gun.findById(req.params.id)
        .then(handle404)
        .then(gun => {
            return gun.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


module.exports = router