const ReservaSchema = require('../models/ReservaSchema')
const moment = require('moment')


const reserve = async (request, response) => {
    try{
        const {  data_reserva  } = request.body;
        
        const reserver = new ReservaSchema({
            salao: request.body.salao,
            data_reserva: trateDate(req.body.data_reserva)
        })

        response.status(200).json({
            mensagem:`Reserva confirmada para o dia ${data_reserva}`
        })
}catch(error){
        response.status(400).json({
            mensagem: error.message
        })
    }
}

const trateDate = (data)=>{
    return moment.utc(data)
}

module.exports = {
    reserve
}