const express = require('express')
const creatorLogin = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const jwtSecretKey = process.env.JWT_SECRET_KEY

//model
const creatorModel = require('../../models/creator-mod')

//middlewares

creatorLogin.post('/creator/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const creator = await creatorModel.findOne({email: email});
    if(creator) {
        const pswCreator = await bcrypt.compare(password, creator.password);

        if(pswCreator) {
            const token = jwt.sign(
                {
                    id: creator._id,
                    firstName: creator.firstName,
                    lastName: creator.lastName,
                    email: creator.email,
                    role: 'creator'
                }, jwtSecretKey, { expiresIn: '1h'});
            return res.status(200).json(token)
        } else {
            return res.status(400).json({message: 'email o password non validi'})
        }
    } else {
        return res.status(400).json({message: 'email o password non validi'})
    }
})

module.exports = creatorLogin