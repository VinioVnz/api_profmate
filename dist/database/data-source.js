"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const Aula_1 = require("../entities/Aula");
const Usuario_1 = require("../entities/Usuario");
const Aluno_1 = require("../entities/Aluno");
const Pagamento_1 = require("../entities/Pagamento");
const Tarefa_1 = require("../entities/Tarefa");
const Ementas_1 = require("../entities/Ementas");
const Mural_1 = require("../entities/Mural");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Aula_1.Aula, Usuario_1.Usuario, Aluno_1.Aluno, Pagamento_1.Pagamento, Tarefa_1.Tarefa, Ementas_1.Ementas, Mural_1.Mural],
    migrations: ['dist/database/migrations/*.js'],
    synchronize: Boolean(process.env.DB_SYNC),
});
