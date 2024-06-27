const jwt = require('jsonwebtoken');
const jwtSecretKey = process.env.JWT_SECRET_KEY

const userModel = require('../models/user-mod')

const authCreator = async (req, res, next) => {
    let token = req.headers.authorization

    if(!token) {
        return res.status(403).json({message: 'Token inesistente!'})
    }

    try {
        const readToken = jwt.verify(token, jwtSecretKey)
        const user = await userModel.findById(readToken.id)

        if(!user){
            return res.status(403).json({message: 'User inesistente'})
        }

        req.user = user
        
        if (readToken.role && readToken.role === 'user') {
            next();
        } else {
            return res.status(403).json({message: 'Accesso negato'})
        }
    } catch (error) {
        return res.status(500).json({message: 'Token non valido'})
    }
}

module.exports = authCreator