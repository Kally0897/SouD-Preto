const mongoose = require('mongoose');

const LojaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cnpj:{
        type: String,
        required: true,
        unique: true
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
    endereco:{
        rua:{
            type: String,
            rquired: true
        },
        número:{
            type: Number,
            required: true
        },
        bairro: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        estado:{
            type: String,
            required: true
        },
        cep:{
            type: String,
            required: true
        },
        complemento:{
            type: String,
            required: false

        }
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