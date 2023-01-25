const express =require('express')

const { handle404 } = require('../lib/custom-errors')

const Loadout = require('../models/loadout')

const router = express.Router()

// Index
// Get /loadouts
router.get('/loadouts', (req, res, next) => {
    Loadout.find()
        .then(loadouts => {
            return loadouts.map(loadout => loadout)
        })
        .then(loadouts => {
            res.status(200).json({ loadouts: loadouts })
        })
        .catch(next)
})

// Show
// Get /loadouts/:id
router.get('/loadouts/:id', (req, res, next) => {
    Loadout.findById(req.params.id)
        .then(handle404)
        .then(loadout => {
            res.status(200).json({ loadout: loadout })
        })
        .catch(next)
})

// Create
// Post /loadouts
router.post('/loadouts', (req, res, next) => {
    Loadout.create(req.body.loadout)
        .then(loadout => {
            res.status(201).json({ loadout: loadout })
        })
        .catch(next)
})

// Update
// Patch /loadouts/
router.patch('/loadouts/:id', (req, res, next) => {

    const characterID = req.body.loadout.characterID
    delete req.body.loadout.characterID

	Loadout.findById(req.params.id)
		.then(handle404)
		.then((loadout) => {
            if (characterID){
                loadout.characters.push(characterID)

                loadout.save()
            }

			return loadout.updateOne(req.body.loadout)
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

// Delete
// Delete /loadout/:id
router.delete('/loadouts/:id', (req, res, next) => {
    Loadout.findById(req.params.id)
        .then(handle404)
        .then(loadout => {
            return loadout.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router