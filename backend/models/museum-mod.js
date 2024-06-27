const mongoose = require('mongoose')
const painting = require('../routes/painting/painting_routes')

const MuseumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    /*paintings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Painting',
        default: []
    }],*/
    guides: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guide',
        default: []
    }]
})

const museumModel = mongoose.model('Museum', MuseumSchema)
module.exports = museumModel