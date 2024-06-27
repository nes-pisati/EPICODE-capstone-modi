const express = require('express')
const guide = express.Router()

//model
const guideModel = require('../../models/guide-mod')
const creatorModel = require('../../models/creator-mod')
const museumModel = require('../../models/museum-mod')
const paintingModel = require('../../models/painting-mod')


//middlewares

//routes

//TEXT TO MP3



//POST
guide.post('/guide/:creatorId/:museumId', async (req, res) => {

    const creatorId = req.params.creatorId
    const creator = await creatorModel.findOne({_id: creatorId})

    const museumId = req.params.museumId
    const museum = await museumModel.findOne({_id: museumId})

    const newGuide = new guideModel({
        title: req.body.title,
        creator: creator._id,
        subtitle: req.body.subtitle,
        museum: museum._id,
        description: req.body.description
    })

    try {
        const saveGuide = await newGuide.save();
        await creatorModel.updateOne({_id: creatorId}, {$push: {guides: saveGuide}})
        await museumModel.updateOne({_id: museumId}, {$push: {guides: saveGuide}})
        return res.status(201).json(saveGuide)
    } catch (error) {
        return res.status(500).json({message: 'Problemi nella creazione della guida', error: error})
    }
})

//GET ALL
guide.get('/guide', async (req, res) => {

    const limit = req.query.size;
    const skip = (req.query.page-1) * limit;

    try {
        const guides = await guideModel
                                .find()
                                .populate({path: 'paintings'})
                                .populate({path: 'creator', select: '_id firstName lastName'})
                                .populate({path: 'museum', select: '_id name city'})
                                .limit(limit)
                                .skip(skip)
        res.status(200).json(guides)
    } catch (error) {
        return res.status(500).json({message: 'Problemi nel caricamento delle guide', error: error})
    }
})

//GET BY ID
guide.get('/guide/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const guide = await guideModel.findById(id);
        return res.status(200).json(guide)
    } catch (error) {
        return res.status(500).json({message: 'Guida non trovata', error: error})
    }
})

//PUT
guide.put('/guide/:id', async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const editedGuide = await guideModel.findByIdAndUpdate(id, obj);
        return res.status(200).json(editedGuide)
    } catch (error) {
        return res.status(500).json({message: 'Problemi con la modifica della guida', error: error})
    }
})

//DELETE
guide.delete('/guide/:guideId/:creatorId/:museumId', async (req, res) => {
    const guideId = req.params.guideId;
    const creatorId = req.params.creatorId
    const museumId = req.params.museumId
    try {
        await guideModel.findByIdAndDelete(guideId)
        await creatorModel.findByIdAndUpdate({_id: creatorId}, {$pull: {guides: guideId}})
        await museumModel.findByIdAndUpdate({_id: museumId}, {$pull: {guides: guideId}})
        await paintingModel.deleteMany({guide: guideId})
        return res.status(200).json({message: 'Guida rimossa correttamente'})
    } catch (error) {
        return res.status(500).json({message: 'Problemi con la modifica della guida', error: error})
    }
})

module.exports = guide