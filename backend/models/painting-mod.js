const mongoose = require('mongoose')

const PaintingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
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