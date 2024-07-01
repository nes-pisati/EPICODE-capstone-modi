const mongoose = require('mongoose')

const PaintingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: ''
    },
    artist: {
        type: String,
        required: true,
        default: ''
    },
    date: {
        type: String,
        required: true,
        default: ''
    },
    paintingImg: {
        type: String,
        required: true,
        default: "https://picsum.photos/400/500"
    },
    description: {
        type: String,
        required: true
    },
    guide: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guide',
    }

}, { timestamps: true, strict: true })

const paintingModel = mongoose.model('Painting', PaintingSchema)
module.exports = paintingModel