const express = require('express')
const museum = express.Router()

//model
const museumModel = require('../../models/museum-mod')

//middlewares

//routes
//POST
museum.post('/museum', async (req, res) => {
    
    const obj = req.body

    try {
        const newMuseum = museumModel(obj);
        const saveMuseum = await newMuseum.save();
        return res.status(201).json(saveMuseum)
    } catch (error) {
        return res.status(500).json({message: 'Problemi nella creazione del museo', error: error})
    }
})

//GET
museum.get('/museum', async (req, res) => {
    try {
        const allMuseums = await museumModel.find().populate({path: 'guides'}) //.populate({path: 'paintings'});
        return res.status(200).json(allMuseums)
    } catch (error) {
        return res.status(500).json({message: 'Errore nel caricamento dei musei', error: error})
    }
})

//GET BY ID
museum.get('/museum/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const museum = await museumModel.findById(id)
        return res.status(200).json(museum)
    } catch (error) {
        return res.status(500).json({message: 'Museo non trovato', error: error})
    }
})

//PUT
museum.put('/museum/:id', async (req, res) => {
    const id = req.params.id;
    const obj = req.body;

    try {
        const editedMuseum = await museumModel.findByIdAndUpdate(id, obj);
        return res.status(200).json(editedMuseum)
    } catch (error) {
        return res.status(500).json({message: 'Problemi nella modifica del museo', error: error})
    }
})

//DELETE
museum.delete('/museum/:id', async (req, res) => {
    const id = req.params.id;
    
    try {
        await museumModel.findByIdAndDelete(id);
        return res.status(200).json({message: 'Museo rimosso correttamente'})
    } catch (error) {
        return res.status(500).json({message: 'Problemi nella cancellazione del museo', error: error})
    }
})

module.exports = museum