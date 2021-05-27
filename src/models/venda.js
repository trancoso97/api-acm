const { Schema } = require('mongoose')
const mongoose = require('../database/mongo')

const VendaSchema = new mongoose.Schema({
    produtos: {
        type: Schema.Types.ObjectId,
        ref: 'Produto'
    },
    data: {
        type: Date,
        default: Date.now,
    }
},{versionKey: false})

const Venda = mongoose.model('Venda', VendaSchema)

module.exports = Venda