const mongoose = require('mongoose')

const Schema = mongoose.Schema

const loadoutSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        guns: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Gun'
            }
        ],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
          },
    },
    {
        timestamps: true,
    }
)

const Loadout = mongoose.model('Loadout', loadoutSchema)

module.exports = Loadout