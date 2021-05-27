const mongoose = require('../database/mongo')

const ProdutoSchema = new mongoose.Schema({
    ref: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    quant: {
        type: Number,
        required: true,
    },
    custo: {
        type: String,
        required: true,
    },
    preco: {
        type: String,
        required: true,
    }

},{versionKey: false})

const Produto = mongoose.model('Produto', ProdutoSchema)

module.exports = Produto