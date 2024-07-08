const express = require('express')
const creator = express.Router()

//model
const creatorModel = require('../../models/creator-mod')

//middlewares
const encryptPsw = require('../../middlewares/pswCrypt')

//routes
 
//GET
creator.get('/creators', async (req, res) => {
    try {
        const allCreators = await creatorModel.find().populate({path: 'guides'});
        return res.status(200).json(allCreators)
    } catch (error) {
        return res.status(500).json({message: 'Errore nel caricamento dei creator', error: error})
    }

})

//GET BY ID
creator.get('/creators/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const creator = await creatorModel.findById(id).populate({path: 'guides'});
        return res.status(200).json(creator)
    } catch (error) {
        return res.status(500).json({message: 'Creator non trovato', error: error})
    }
})

//PUT
creator.put('/creators/:id', encryptPsw, async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    try {

        const isCreatorEmailExistent = await creatorModel.findOne({email: req.body.email})

        if(isCreatorEmailExistent) {
            return res.status(409).json({ message: 'Esiste già un creator con questo indirizzo mail'})
        }

        const editedCreator = await creatorModel.findByIdAndUpdate(id, obj);
        return res.status(200).json(editedCreator)
    } catch (error) {
        return res.status(500).json({message: 'Problemi con la modifica del creator', error: error})
    }
})

//DELETE
creator.delete('/creators/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await creatorModel.findByIdAndDelete(id);
        return res.status(200).json({message: 'Creator rimosso correttamente'})
    } catch (error) {
        return res.status(500).json({message: 'Problemi con la cancellazione del creator', error: error})
    }
})

module.exports = creator