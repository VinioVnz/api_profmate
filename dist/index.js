"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const aula_routes_1 = __importDefault(require("./routes/aula.routes"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const aluno_routes_1 = __importDefault(require("./routes/aluno.routes"));
const pagamento_routes_1 = __importDefault(require("./routes/pagamento.routes"));
const data_source_1 = require("./database/data-source");
const Usuario_1 = require("./entities/Usuario");
const bcrypt = require('bcrypt');
require('dotenv').config();
data_source_1.AppDataSource.initialize()
    .then(async () => {
    //criando user admin
    const repo = data_source_1.AppDataSource.getRepository(Usuario_1.Usuario);
    //verifica se ele existe
    const existeOAdmin = await repo.findOne({ where: { email: 'admin' } });
    if (!existeOAdmin) {
        const UserPadrao = {
            nome: 'ADMIN',
            uid: 'admin',
            email: 'admin',
            password: await bcrypt.hash('12345', 10),
            cpf: '000.000.000-00',
            dataNascimento: new Date('1990-10-25')
        };
        //aqui cria um usuario padrao remvoer quando for pra produção pelo amor de Deus
        const userAdmin = await repo.create(UserPadrao);
        await repo.save(userAdmin);
    }
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use('/aulas', aula_routes_1.default);
    app.use('/usuarios', usuario_routes_1.default);
    app.use('/login', auth_routes_1.default);
    app.use('/alunos', aluno_routes_1.default);
    app.use('/pagamentos', pagamento_routes_1.default);
    app.listen(process.env.PORT, () => {
        console.log('Servidor rodando na porta: ', process.env.PORT);
    });
}).catch((error) => {
    console.log('Banco de dados não conectado. ', error);
});
