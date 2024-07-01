const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4
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
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userAvatar: {
        type: String,
        required: false,
        default: 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Peanut'
    }
}, { timestamps: true, strict: true })

const userModel = mongoose.model('User', UserSchema)
module.exports = userModel