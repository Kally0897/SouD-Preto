const moment = require('moment');
const mongoose = require('mongoose');


const reserve = async (request, response) => {
    try{
        const {  data_reserva  } = request.body;
        
        const reserver = new ReservaSchema({
            salao: request.body.salao,
            corte_solidario: true,
            data_reserva: tratarData(req.body.data_reserva)
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

const tratarData = (data)=>{
    return moment.utc(data)
}

module.exports = {
    reserve
}