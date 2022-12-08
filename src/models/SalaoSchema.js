const mongoose = require('mongoose');

const SalaoSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    cnpj:{
        type: String,
        required: true

    },
    instagram: {
        type: String,
        required: true
    },
    telefone:{
         type: String,
         required: true
    },
    especialidades:{
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('salao', SalaoSchema);
