const bcrypt = require('bcrypt')
const saltRounds = 10

//middleware per crypt della password

const encryptPsw = async (req, res, next) => {
    try {
        if(req.body && req.body.password) {
            const password = await bcrypt.hash(req.body.password, saltRounds);
            req.body.password = password
        }
        next()
    } catch (error) {
        return res.status(500).json({message: "ATTENZIONE! Problemi con il crypt della password"})
    }
}

module.exports = encryptPsw