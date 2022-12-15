const Reserva = require("../models/ReservaSchema")
const moment = require('moment');



const allReserves = async (request, response) => {
    const reservas = await Reserva.find()
    return response.status(200).json(reservas)
}


const createReserve = async (request, response) => {
    try{
        const {  data_reserva  } = request.body;
        
        const reserver = new Reserva({
            salao: request.body.salao,
            data_reserva: trateDate(req.body.data_reserva)
        })

        response.status(200).json({
            mensagem:`Reserva confirmada para o dia ${data_reserva}, segue dados: ${reserver}`
        })
}catch(error){
        response.status(400).json({
            mensagem: error.message
        })
    }
}

const replaceReserves = async (request, response) => {
    const { nome } = request.query;

    let query = { };

    if(nome) query.nome = new RegExp(nome, "i") 

    if(query.nome != null){
        nome.reserver.salao = request.body.reserver.salao,
        nome.reserver.data_reserva = request.body.reserver.data_reserva
    }

    try{
        const adjusteReserva = nome.save()
        return response.status(200).json({adjusteReserva})
    }catch(error){
        response.status(500).json({
        message: "Reserva não encontrada em nosso sistema"
        })
    }
}

const deleteReserve = async (request, response) =>{
    const reservas = await Reserva.findById(request.params.id)

    if(reservas == null){
        return response.status(404).json({
            message: "Reserva não encontrada"
        })
    }

    try{
        await reservas.remove()
        response.status(200).json({
            message: "Reserva deletada com sucesso!"
        })
    }catch(error){
            return response.status(500).json({
            message: error.message
           })
        }
}
const trateDate = (data)=>{
    return moment.utc(data)
}

module.exports = {
    allReserves,
    createReserve,
    replaceReserves,
    deleteReserve
}