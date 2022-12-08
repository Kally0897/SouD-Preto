const mongoose = require('mongoose');

const CabeloSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    características:{
        type: String,
        required: true
    },
    cuidados_solicitados:{
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('cabelo', CabeloSchema);