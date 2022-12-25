const mongoose = require('mongoose');

const SalaoSchema = new mongoose.Schema({
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
        required: true
    },
    telefone:{
         type: String,
         required: true
    },
    endereco:{
        rua:{
            type: String,
            rquired: true
        },
        numero:{
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
