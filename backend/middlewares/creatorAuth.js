const jwt = require('jsonwebtoken');
const jwtSecretKey = process.env.JWT_SECRET_KEY

const creatorModel = require('../models/creator-mod')

const authCreator = async (req, res, next) => {
    let token = req.headers.authorization

    if(!token) {
        return res.status(403).json({message: 'Token inesistente!'})
    }

    try {
        const readToken = jwt.verify(token, jwtSecretKey)
        const creator = await creatorModel.findById(readToken.id)

        if(!creator){
            return res.status(403).json({message: 'Creator inesistente'})
        }

        req.creator = creator
        
        if (readToken.role && readToken.role === 'creator') {
            next();
        } else {
            return res.status(403).json({message: 'Accesso negato'})
        }
    } catch (error) {
        return res.status(500).json({message: 'Token non valido'})
    }
}

module.exports = authCreator