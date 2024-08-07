const express = require('express')
const creatorRegister = express.Router()

const bcrypt = require('bcrypt')
const saltRounds = 10

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
        folder: 'creator_avatar',
        format: async (req, file) => 'jpg',
        public_id: (req, file) => file.originalname
    }
})

const cloudUpload = multer({ storage: cloudStorage })

//model
const creatorModel = require('../../models/creator-mod')

//middlewares
const encryptPsw = require('../../middlewares/pswCrypt')
const validateCreatorBody = require('../../middlewares/validate_creator')

creatorRegister.post('/creator/register', [cloudUpload.single('creatorAvatar'), validateCreatorBody], async (req, res) => {
    
    if(!req.file) {
        return res.status(400).json({ message: 'Errore nel caricamento del file' }); 
    }

    const password = req.body.password

    try {

        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt)

        const newCreator = new creatorModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            creatorAvatar: req.file.path
        })

        const isCreatorExistent = await creatorModel.findOne({ email: req.body.email })

        if(isCreatorExistent) {
            return res.status(409).json({ message: 'Esiste già un creator con questo indirizzo mail'})
        }

        const creatorSaved = await newCreator.save()
        return res.status(201).json(creatorSaved)
    } catch (error) {
        return res.status(500).json({ message: 'Problemi nella creazione del creator', error: error })
    }
})

module.exports = creatorRegister
