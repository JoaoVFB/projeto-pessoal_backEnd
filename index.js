const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/agenda')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro na conexão:', err));

const Usuario = require('./models/usuarios');
const Compromisso = require('./models/compromissos');

const novoUsuario = new Usuario({
    nome: "João Vitor Furquim de Brito",
    email: "joao@gmail.com",
    senha: "cofre321",
    telefone: "439090900",
    data_cadastro: new Date()
});

const novoCompromisso = new Compromisso({
    usuarioId: novoUsuario._id,
    titulo: 'Reunião com João',
    descricao: 'Definir metas para o semestre',
    data_inicio: new Date('2025-06-01T10:00:00'),
    data_fim: new Date('2025-06-01T11:00:00'),
    local: 'Sala 1',
    tipo: 'Reunião',
    status: 'Pendente',
    lembrete: [
        { horario: new Date('2025-06-01T09:45:00'), metodo: 'Notificação' }
    ],
    etiquetas: ['trabalho', 'importante'],
    participantes: [
        { nome: 'Maria', email: 'maria@email.com', confirmado: true }
    ]
});






novoUsuario.save()
    .then(doc => console.log('Usuário salvo', doc))
    .catch(err => console.error('Erro ao salvar', err));

novoCompromisso.save()
    .then(doc => console.log('Compromisso salvo:', doc))
    .catch(err => console.error('Erro ao salvar:', err));





