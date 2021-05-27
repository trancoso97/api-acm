const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

const produtoRoutes = require('./routes/produtoRoutes')

app.use('/produtos', produtoRoutes)

module.exports = app