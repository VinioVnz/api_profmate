"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const aula_routes_1 = __importDefault(require("./routes/aula.routes"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const data_source_1 = require("./database/data-source");
require('dotenv').config();
data_source_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use('/aulas', aula_routes_1.default);
    app.use('/usuarios', usuario_routes_1.default);
    app.use('/login', auth_routes_1.default);
    app.listen(process.env.PORT, () => {
        console.log('Servidor rodando na porta: ', process.env.PORT);
    });
}).catch((error) => {
    console.log('Banco de dados não conectado. ', error);
});
