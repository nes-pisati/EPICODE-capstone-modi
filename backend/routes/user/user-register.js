const express = require('express')
const userRegister = express.Router()

const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const cloudStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'user_avatar',
        format: async (req, file) => 'jpg',
        public_id: (req, file) => file.originalname
    }
})

const cloudUpload = multer({ storage: cloudStorage })



//model
const userModel = require('../../models/user-mod')

//middlewares
const encryptPsw = require('../../middlewares/pswCrypt')
const validateUserBody = require('../../middlewares/validate_user')

//route
userRegister.post('/user/register', validateUserBody, encryptPsw, cloudUpload.single('userAvatar'), async (req, res) => {

    if(!req.file) {
        return res.status(400).json({ message: 'Errore nel caricamento del file' }); 
    }

    const newUser = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userAvatar: req.file.path
    })

    try {

        const isUserEmailExistent = await userModel.findOne({ email: req.body.email })
        const isUsernameExistent = await userModel.findOne({username: req.body.username})

        if(isUserEmailExistent) {
            return res.status(409).json({ message: 'Esiste già uno user con questo indirizzo mail'})
        } else if(isUsernameExistent) {
            return res.status(409).json({ message: 'Esiste già uno user con questo username'})
        }

        const userSaved = await newUser.save()
        return res.status(201).json(userSaved)
    } catch (error) {
        return res.status(404).json({ message: 'Problemi nella creazione del creator', error: error })
    }
})

module.exports = userRegister