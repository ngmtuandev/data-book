const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
let bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const tacgiaRoute = require('./Route/tacgia')
const tacPhamRoute = require('./Route/tacpham')
// Comnnect Mongoose
dotenv.config()
mongoose.connect((process.env.MONGOOSE_DATA_BOOK), () => {
    console.log('Connect Mongoose database')
})

app.use(bodyParser.json({limit: '50mb'}))
app.use(cors())
app.use(morgan('common'))

app.use('/data/tacgia', tacgiaRoute)
app.use('/data/tacpham', tacPhamRoute)

app.listen(8000, () => {
    console.log('Connect port successfully')
})

