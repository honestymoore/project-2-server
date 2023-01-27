const express = require('express')

const router = express.Router()

const Note = require('../models/note')
const { handle404 } = require('../lib/custom-errors')

// CREATE
// POST /notes/
router.post('/notes', (req, res, next) => {
	const noteId = req.body.note.noteId

	Note.findById(noteId)
		.then(handle404)
		.then((note) => {
			note.notes.push(req.body.note)

			return note.save()
		})

		.then((note) => res.status(201).json({ note: note }))
		.catch(next)
})

module.exports = router