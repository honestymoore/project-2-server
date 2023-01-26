const express = require('express')

const router = express.Router()

const Campaign = require('../models/campaign')
const { handle404 } = require('../lib/custom-errors')

// CREATE
// POST /notes/
router.post('/notes', (req, res, next) => {
	const campaignId = req.body.note.campaignId

	Campaign.findById(campaignId)
		.then(handle404)
		.then((campaign) => {
			campaign.notes.push(req.body.note)

			return campaign.save()
		})

		.then((campaign) => res.status(201).json({ campaign: campaign }))
		.catch(next)
})

module.exports = router