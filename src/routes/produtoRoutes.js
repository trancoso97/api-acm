const express = require('express')
const router = express.Router()
const Produto = require('../models/produto')

//LISTAR OS PRODUTOS
router.get('/listar', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        let produtos = await Produto.find()
        res.status(200).send({ produtos: produtos })
        now = new Date()
        console.log(`[${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] => Listou produtos`)
    } catch (err) {
        return res.status(500)
    }
})

//INSERIR UM PRODUTO
router.post('/cadastrar', async (req, res) => {
    try {
        let produto = await Produto.create(req.body);
        res.status(201).redirect('http://localhost/')
        now = new Date()
        console.log(`[${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] => ${produto.ref} cadastro!`)
    } catch (err) {
        return res.status(400).send({ erro: `Falha ao cadastrar produto ${req.body.ref}. ${err}` })
    }
})

//ALTERAR UM PRODUTO
router.post('/alterar', async (req, res) => {
    try {
    let produto = await Produto.findOneAndUpdate(req.body.ref, req.body)
    res.status(200).redirect('http://localhost/')
    now = new Date()
    console.log(`[${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] => ${produto.ref} alterado!`)
    } catch (err) {
        return res.status(400).send({ erro: `Falha ao alterar produto ${req.body.ref}. ${err}` })
    }
})

module.exports = router
