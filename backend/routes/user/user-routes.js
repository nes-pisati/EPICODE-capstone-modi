const express = require('express')
const user = express.Router()

//model
const userModel = require('../../models/user-mod')

//middlewares
const encryptPsw = require('../../middlewares/pswCrypt')

//routes
//GET
user.get('/users', async (req, res) => {
    const allUsers = await userModel.find();
    return res.status(200).json(allUsers)
})

//GET BY ID
user.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const user = await userModel.findById(id)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message: 'Utente non trovato', error: error})
    }
})

//PUT
user.put('/users/:id', encryptPsw, async (req, res) => {
    const id = req.params.id;
    const obj = req.body;

    try {
        const editedUser = await userModel.findByIdAndUpdate(id, obj);
        return res.status(200).json(editedUser)
    } catch (error) {
        return res.status(500).json({message: 'Problemi con la modifica del utente', error: error})
    }
})

//DELETE
user.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await userModel.findByIdAndDelete(id);
        return res.status(200).json({message: 'Utente rimosso correttamente'})
    } catch (error) {
        return res.status(500).json({message: 'Problemi con la cancellazione del utente', error: error})
    }
})

module.exports = user