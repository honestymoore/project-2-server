const express = require('express')

const Gun  = require('../models/gun')

const router = express.Router()

const startGuns = [
    {
        name: 'Vel 46',
        class: 'SMG',
        skin: 'Tagged'
    },
    {
        name: 'MX9',
        class: 'SMG',
        skin: 'Gold'
    },
    {
        name: 'Lachmann Sub',
        class: 'SMG',
        skin: 'Gold'
    }
]

router.get('/guns', (req, res, next) => {
	Gun.deleteMany({})
        .then(() => {
            Gun.create(startGuns)
                .then((guns) => res.status(200).json({ guns: guns }))
        })
        .catch(next)
})

module.exports = router