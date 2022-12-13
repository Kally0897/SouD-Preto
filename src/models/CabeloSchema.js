const mongoose = require('mongoose');

const CabeloSchema = new mongoose.Schema({

    nome:{
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    caracteristicas:{
        type: String,
        required: true
    },
    cuidados_solicitados:{
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('Cabelo', CabeloSchema);