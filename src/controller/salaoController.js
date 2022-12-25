const mongoose = require("mongoose")
const Salao = require("../models/SalaoSchema")
const Loja = require("../models/LojaSchema")


const showSalao = async (request, response) => {
    const saloes = await Salao.find()
    return response.status(200).json(saloes)
}

const showSalaoNome = async (request, response) => {
const { nome } = request.query;

let query = { };

if(nome) query.nome = new RegExp(nome, "i")

    try{
        const salao = await Salao.find(request.query.nome)
        response.status(200).json(salao)
    }catch(error){
        response.status(500).json({
            message: "Salao não encotrado em nosso sistema"
        })
    }
}

const showSalaoEspecialidadesPorNome = async (request, response) => {
const { especialidades } = request.query;

let query = { };

if (especialidades) query.especialidades = new RegExp(especialidades, "i")

    try{
        const salao = await Salao.find(query)
        response.status(200).json(salao)
    }catch(error){
        response.status(500).json({
            message: "Especialidade não encotrada em nosso sistema"
        })
    }
}

const showSalaoId = async (request, response) => {
    try{
        const salao = await Salao.findById(request.params.id)
        response.status(200).json(salao)
    }catch(error){
        response.status(200).json({
            message: "Salão não encontrado em nosso sistema"
        })
    }
}

const createSalao = async (request, response) => {
    const salon = new Salao({
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        cnpj: request.body.cnpj,
        instagram: request.body.instagram,
        telefone: request.body.telefone,
        endereco: {
            rua: request.body.endereco.rua,
            numero: request.body.endereco.numero,
            bairro: request.body.endereco.bairro,
            cidade: request.body.endereco.cidade,
            estado: request.body.endereco.estado,
            cep: request.body.endereco.cep,
            complemento: request.body.endereco.complemento

        },
        especialidades: request.body.especialidades
    })

    const existingCnpj = await (Loja.findOne({ cnpj: request.body.cnpj}) || Salao.findOne({ cnpj: request.body.cnpj}))

    if(existingCnpj){
        return response.status(409).json({ error: "Cnpj já cadastrado na nossa base de dados"})
    }

    try{
        const newSalon = await salon.save()
        return response.status(201).json(newSalon)
    }catch(error){
        return response.status(404).json({
            message: error. message
        })
    }

}

const replaceSalao = async (request, response) => {
    const saloon = await Salao.findById(request.params.id)

    if (saloon == null){
        return response.status(404).json({
            message: "Salão não encontrado"
        })
    }

    if(request.params.id != null){
        saloon.nome = request.body.nome,
        saloon.cnpj = request.body.cnpj,
        saloon.instagram = request.body.instagram,
        saloon.telefone = request.body.telefone,
        saloon.especialidades = request.body.especialidades
    }

    try{
        const adjusteSalao = await saloon.save()
        return response.satus(200).json({adjusteSalao})
    }catch(error){
        response.status(500).json({
            message: error.message
        })
    }
}

const deleteSalao = async (request, response) => {
        const saloon = await Salao.findById(request.params.id)
        if(saloon == null){
            return response.satus(404).json({
                message: "Salão não encontrado"
            })
        }

        try{
            await saloon.remove()
            response.satus(200).json({
                message: "Salão deletado com sucesso!"
            })
        }catch(error){
            return response.satus(500).json({
                message: error.message
            })
        }
}


module.exports = {
    showSalao,
    showSalaoNome,
    showSalaoEspecialidadesPorNome,
    showSalaoId,
    createSalao,
    replaceSalao,
    deleteSalao
}