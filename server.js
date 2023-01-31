// Command Center
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const db = require('./config/db')
const PORT = process.env.PORT || 8000

const gunSeed = require('./lib/gun-seed')
const requestLogger = require('./lib/request-logger')
const gunRoutes = require('./routes/gun-routes')
const loadoutRoutes = require('./routes/loadout-routes')
const noteRoutes = require('./routes/note-routes')
const userRoutes = require('./routes/user-routes')

mongoose.set('strictQuery', true)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://127.0.0.1:5500` }))

app.use(express.json())

app.use('/seed', gunSeed)
app.use(requestLogger)
app.use(gunRoutes)
app.use(loadoutRoutes)
app.use(noteRoutes)
app.use(userRoutes)

app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})

module.exports = app