const mongoose = require('mongoose')

//start the server
async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL + process.env.DB_NAME)
        console.log('Database connesso con successo');
    } catch (error) {
        console.error(error)
    }
}

module.exports = connect