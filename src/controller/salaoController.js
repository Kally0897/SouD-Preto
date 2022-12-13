const mongoose = require("mongoose")
const Salao = require("../models/SalaoSchema")
const Loja = require("../models/LojaSchema")



const showSalao = async (request, response) => {
    const saloes = await Salao.find()
    return response.status(200).json(saloes)
}

const createSalao = async (request, response) => {
    const salon = new Salao({
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        cnpj: request.body.cnpj,
        instagram: request.body.instagram,
        telefone: request.body.telefone,
        bairro: request.body.bairro,
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
        saloon.bairro = request.body.bairro,
        saloon.especialidades = request.body.especialidades

    }

    try{
        const adjusteSalao = await saloon.save()
        return response.satus(200).send(`Salão atualizado com sucesso:`, adjusteSalao)
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
                message: "Slão deletado com sucesso!"
            })
        }catch(error){
            return response.satus(500).json({
                message: error.message
            })
        }
    }





module.exports = {
    showSalao,
    createSalao,
    replaceSalao,
    deleteSalao
}