const { body, validationResult } = require('express-validator')

const validateUserBody = [
    body('username')
        .isString()
        .withMessage('Inserisci una stringa valida per favore')
        .isLength({min: 4})
        .withMessage('Lo username deve avere almeno quattro caratteri')
        .notEmpty(),
    body('email')
        .isEmail()
        .withMessage('Inserisci un indirizzo mail valido per favore')
        .notEmpty(),
    body('password')
        .isString()
        .withMessage('Inserisci una stringa valida per favore')
        .isLength({min: 7})
        .withMessage('La password deve avere almeno 7 caratteri')
        .notEmpty(),
    body('firstName')
        .isString()
        .withMessage('Inserisci una stringa valida per favore')
        .notEmpty(),
    body('lastName')
        .isString()
        .withMessage('Inserisci una stringa valida per favore')
        .notEmpty(),

    (req, res, next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        next()
    }
]

module.exports = validateUserBody