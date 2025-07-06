const mongoose = require('mongoose');

const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nome: {type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},
    senha: {type: String, require: true},
    telefone: {type: String, require: true},
    data_cadastro: {type: Date, default: Date.now}
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;