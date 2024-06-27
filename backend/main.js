const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

//routes
const creatorRegisterRoute = require('./routes/creator/creator-register')
const creatorLoginRoute = require('./routes/creator/creator-login')
const creators = require('./routes/creator/creator-routes')

const userRegisterRoute = require('./routes/user/user-register')
const userLoginRoute = require('./routes/user/user-login')
const users = require('./routes/user/user-routes')

const museumRoute = require('./routes/museum/museum_routes')
const paintingRoute = require('./routes/painting/painting_routes')
const guideRoute = require('./routes/guide/guide_routes')

const app = express()
const PORT = 3030

//connection to DB
const dbStart = require('./db')
dbStart()

//middlewares
app.use(cors())
app.use(express.json())

//custom middlewares

app.use('/', creatorRegisterRoute)
app.use('/', creatorLoginRoute)
app.use('/', creators)

app.use('/', userRegisterRoute)
app.use('/', userLoginRoute)
app.use('/', users)

app.use('/', museumRoute)
app.use('/', paintingRoute)
app.use('/', guideRoute)


app.listen(PORT, () => {
    console.log(`Server attivo sulla porta: ${PORT}`);
})

