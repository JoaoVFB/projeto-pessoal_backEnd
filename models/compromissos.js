const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const compromissoSchema = new Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario', // Nome do modelo do usuário
        required: true
    },
    titulo: { type: String, required: true, unique: true },
    descricao: { type: String, required: true },
    data_inicio: { type: Date, default: Date.now },
    data_fim: { type: Date, default: Date.now },
    local: { type: String },
    tipo: { type: String },
    status: { type: String },
    lembrete: [
        {
            horario: { type: Date },
            metodo: { type: String }
        }
    ],
    etiquetas: { type: [String] },
    participantes: [
        {
            nome: { type: String },
            email: { type: String },
            confirmado: { type: Boolean }
        }
    ]
});


//cria o modelo
const Compromisso = mongoose.model('Compromisso', compromissoSchema);

//exporta o modelo
module.exports = Compromisso;