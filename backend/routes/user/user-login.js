const express = require('express')
const userLogin = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const jwtSecretKey = process.env.JWT_SECRET_KEY

//model
const userModel = require('../../models/user-mod')

//middlewares

userLogin.post('/user/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await userModel.findOne({username: username});
    if(user) {
        const pswUser = await bcrypt.compare(password, user.password);

        if(pswUser) {
            const token = jwt.sign(
                {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    email: user.email,
                    role: 'user'
                }, jwtSecretKey, { expiresIn: '1h'});
            return res.status(200).json(token)
        } else {
            return res.status(400).json({message: 'username o password non validi'})
        }
    } else {
        return res.status(400).json({message: 'username o password non validi'})
    }
})

module.exports = userLogin