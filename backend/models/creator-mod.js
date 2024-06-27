const mongoose = require('mongoose');

const CreatorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 7
    },
    creatorAvatar: {
        type: String,
        required: false,
        default: 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Patches'
    },
    guides: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guide',
        required: true,
        default: []
    }]
}, { timestamps: true, strict: true })

const creatorModel = mongoose.model('Creator', CreatorSchema)
module.exports = creatorModel