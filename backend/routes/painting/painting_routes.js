const express = require('express')
const painting = express.Router()

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
        folder: 'painting_image',
        format: async (req, file) => 'jpg',
        public_id: (req, file) => file.originalname
    }
})

const cloudUpload = multer({ storage: cloudStorage })

//model
const paintingModel = require('../../models/painting-mod')
const guideModel = require('../../models/guide-mod')
const museumModel = require('../../models/museum-mod')

//middlewares
//const authCreator = require('../../middlewares/creatorAuth')

//routes
//POST 

//creare una rotta per il file audio

painting.post('/painting/:guideId', cloudUpload.single('paintingCover'), async (req, res) => {
    
    const guideId = req.params.guideId

    if(!req.file) {
        return res.status(400).json({ message: 'Errore nel caricamento del file' }); 
    }

    const newPainting = new paintingModel({
        title: req.body.title,
        artist: req.body.artist,
        date: req.body.date,
        paintingImg: req.file.path,
        description: req.body.description,
        guide: guideId
    })

    try {
        const savePainting = await newPainting.save()
        await guideModel.updateOne({_id: guideId}, {$push: {paintings: savePainting}})
        return res.status(201).json(savePainting)
    } catch (error) {
        return res.status(500).json({message: 'Problemi nella creazione del quadro', error: error})
    }
})

//GET ALL
painting.get('/painting', async (req, res) => {
    const allPainting = await paintingModel.find();
    return res.status(200).json(allPainting)
})

//GETBYID
painting.get('/painting/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const painting = await paintingModel.findById(id);
        return res.status(200).json(painting)
    } catch (error) {
        return res.status(500).json({message: 'Opera non trovata', error: error})
    }
})

//PUT
painting.put('/painting/:id', async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const editedPainting = await paintingModel.findByIdAndUpdate(id, obj);
        return res.status(200).json(editedPainting)
    } catch (error) {
        return res.status(500).json({message: 'Problemi con la modifica del quadro', error: error})
    }
})

//DELETE
painting.delete('/painting/:paintingId/:guideId', async (req, res) => {
    const paintingId = req.params.paintingId;
    const guideId = req.params.guideId
    try {
        await paintingModel.findByIdAndDelete(paintingId);
        await guideModel.findByIdAndUpdate({_id: guideId}, {$pull: {paintings: paintingId}})
        
        return res.status(200).json({message: 'Opera rimossa correttamente'})
    } catch (error) {
        return res.status(500).json({message: 'Problemi con la cancellazione del quadro', error: error})
    }
})

module.exports = painting