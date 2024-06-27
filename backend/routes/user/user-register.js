const express = require('express')
const userRegister = express.Router()


//model
const userModel = require('../../models/user-mod')

//middlewares
const encryptPsw = require('../../middlewares/pswCrypt')
const validateUserBody = require('../../middlewares/validate_user')

//route
userRegister.post('/user/register', validateUserBody, encryptPsw, async (req, res) => {
    const obj = req.body;
    try {

        const isUserEmailExistent = await userModel.findOne({ email: req.body.email })
        const isUsernameExistent = await userModel.findOne({username: req.body.username})

        if(isUserEmailExistent) {
            return res.status(409).json({ message: 'Esiste già uno user con questo indirizzo mail'})
        } else if(isUsernameExistent) {
            return res.status(409).json({ message: 'Esiste già uno user con questo username'})
        }

        const newUser = userModel(obj);
        const userSaved = await newUser.save()
        return res.status(201).json(userSaved)
    } catch (error) {
        return res.status(404).json({ message: 'Problemi nella creazione del creator', error: error })
    }
})

module.exports = userRegister