const mongoose = require('mongoose');

const LojaSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String,
        required: true
    },
    cnpj:{
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: false
    },
    cabelos:{
        type: Array,
        required: true
    }, 
    telefone:{
         type: String,
         required: false
    },
    bairro:{
        type: String,
        required: true 
    },
    produtos:{
        type: Array,
        required: true 
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Loja', LojaSchema);