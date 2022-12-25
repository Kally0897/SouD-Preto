const mongoose = require("mongoose")
const Salao = require("../models/SalaoSchema")
const Loja = require("../models/LojaSchema")


const showLoja = async (request, response) => {
    const lojas = await Loja.find()
    return response.status(200).json(lojas)
}

const showLojaNome = async (request, response) => {
    const { nome } = request.query;

    let query = { };

    if (nome) query.nome = new RegExp(nome, "i")

    try{
        const loja = await Loja.find(query)
        response.status(200).json(loja)
    }catch(error){
        response.status(500).json({
            message: "Loja não encontrada em nosso sistema"
        })
    }
}

const showLojaProdutoPorNome = async (request, response) => {
    const { produto } = request.query;

    let query = { };

    if(produto) query.produto = new RegExp(produto, "i")

    try{
        const loja = await Loja.find(request.query.produto)
        response.status(200).json(loja)
    }catch(error){
        response.status(500).json({
            message: "Produto não encontrado em nosso sistema"
        })
    }
}

const showLojaId = async (request, response) => {
    try{
        const loja = await Loja.findById(request.params.id)
        response.status(200).json(loja)
    }catch(error){
        response.status(500).json({
            message: "Loja não encontrada em nosso sistema"
        })
    }
}

const createLoja = async (request, response) =>{
    const store = new Loja({
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        cnpj: request.body.cnpj,
        instagram: request.body.instagram,
        cabelos: request.body.cabelos,
        telefone: request.body.telefone,
        endereco: {
            rua: request.body.endereco.rua,
            número: request.body.endereco.número,
            bairro: request.body.endereco.bairro,
            cidade: request.body.endereco.cidade,
            estado: request.body.endereco.estado,
            cep: request.body.endereco.cep,
            complemento: request.body.endereco.complemento

        },
        produto: request.body.produto
    })

    const existingCnpj = await (Loja.findOne({ cnpj: request.body.cnpj}) || Salao.findOne({ cnpj: request.body.cnpj}))

    if(existingCnpj){
        return response.status(409).json({ error: "Cnpj já cadastrado na nossa base de dados"})
    }

    try{
        const newLoja = await store.save()
        return response.status(201).json(newLoja)
    }catch(error){
        return response.status(400).json({
            message: error.message
        })
    }
}

const replaceLoja = async (request, response) => {
        const store = await Loja.findById(request.params.id)

        if(store == null){
            return response.status(404).json({
                message: "Loja não encontrada"
            })
        }

        if(request.params.id != null){
            store.nome = request.body.nome,
            store.cnpj = request.body.cnpj,
            store.instagram = request.body.instagram,
            store.produtos = request.body.produtos,
            store.telefone = request.body.telefone
        }

        try{
            const adjusteCabelo = await store.save()
            return response.status(200).json({adjusteCabelo})
        }catch(error){
            response.status(500).json({
                message: error.message
            })
        }
}

const deleteLoja = async (request, response) => {
        const store = await Loja.findById(request.params.id)
        if(store == null){
            return response.status(404).json({
                message: "Loja não encontrada"
            })
        }

        try{
            await store.remove()
            response.status(200).json({
                message: "Loja deletada com sucesso!"
            })
        }catch(error){
            return response.status(500).json({
            message: error.message
           })
        }
}

module.exports = {
    showLoja,
    showLojaNome,
    showLojaProdutoPorNome,
    showLojaId,
    createLoja,
    replaceLoja,
    deleteLoja
}