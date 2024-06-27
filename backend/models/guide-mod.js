const mongoose = require('mongoose')

const GuideSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Creator',
    },
    subtitle: {
        type: String,
        required: true,
        max: 55
    },
    museum: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Museum',
    },
    coverImg: {
        type: String,
        required: true,
        default: "https://picsum.photos/250"
    },
    description: {
        type: String,
        required: true
    },
    paintings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Painting',
        default: []
    }]
})

const guideModel = mongoose.model('Guide', GuideSchema)
module.exports = guideModel