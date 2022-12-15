const mongoose = require("mongoose")
const Cabelo = require("../models/CabeloSchema")


const showCabelo = async(request, response) => {
    const cabelos = await Cabelo.find()
    return response.status(200).json(cabelos)
}


const createCabelo = async (request, response) => {
    const fio = new Cabelo({
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        tipo: request.body.tipo,
        caracteristicas: request.body.caracteristicas,
        cuidados_solicitados: request.body.cuidados_solicitados
    })

    const existingCabelo = await Cabelo.findOne({ nome: request.body.nome})
    
    if(existingCabelo){
        return response.status(409).json({ error: "Tipo de fio já cadastrado"})
    }

    try{
        const newCabelo = await fio.save()
        return response.status(201).json(newCabelo)
    }catch(error){
        return response.status(400).json({
            message: error.message
        })
    }
}

const adjusteCabelo = async (request, response) => {
    const fio = await Cabelo.findById(request.params.id)

    if(fio == null) {
        return response.status(404).json({
            message: "Tipo de fio não encontrado, tente novamente"
        })
    }

    if(request.body.nome != null){
        fio.caracteristicas = request.body.caracteristicas
        fio.cuidados_solicitados = request.body.cuidados_solicitados
    }

    try{
        const replaceCabelo = await fio.save()
        response.status(200).json({message: "Fio atualizado com sucesso"})
    }catch(error){
        response.status(500).json({
            message: error.message
        })
    }
}



module.exports ={
    showCabelo,
    createCabelo,
    adjusteCabelo

}