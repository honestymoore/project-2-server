const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gunSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        class: {
            type: String,
            required: true,
        },
        
        skin: {
            type: String,
            required: true
        },
        loadout: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Loadout'
        }
    ],
    }, 
    {
        timestamps: true
    }
)

const Gun = mongoose.model('Gun', gunSchema)

module.exports = Gun