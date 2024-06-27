const { body, validationResult } = require('express-validator')

const validateCreatorBody = [
    body('firstName')
        .isString()
        .withMessage('Inserisci una stringa valida per favore')
        .notEmpty(),
    body('lastName')
        .isString()
        .withMessage('Inserisci una stringa valida per favore')
        .notEmpty(),
    body('email')
        .isEmail()
        .withMessage('Inserisci un indirizzo mail valido per favore')
        .notEmpty(),
    body('password')
        .isLength({min: 7})
        .withMessage('La password deve avere almeno 7 caratteri'),
        
    (req, res, next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        next()
    }
]

module.exports = validateCreatorBody