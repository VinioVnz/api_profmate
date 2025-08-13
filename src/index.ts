import 'reflect-metadata';
import express from "express"
import 'reflect-metadata';
import aulasRoutes from './routes/aula.routes'
import userRoutes from './routes/usuario.routes'
import routeLogin from './routes/auth.routes'
import alunoRoutes from './routes/aluno.routes'
import pagamentoRoutes from './routes/pagamento.routes'
import progressoRoutes from './routes/ementas.routes'
import { AppDataSource } from "./database/data-source";
import { Usuario } from "./entities/Usuario";
const bcrypt = require('bcrypt')
require('dotenv').config();

AppDataSource.initialize()
    .then(async () => {
        //criando user admin
        const repo = AppDataSource.getRepository(Usuario)
        //verifica se ele existe
        const existeOAdmin = await repo.findOne({ where: { email: 'admin' } });
        if (!existeOAdmin) {
            const UserPadrao = {
                nome: 'ADMIN',
                email: 'admin',
                password: await bcrypt.hash('12345', 10)
            }

            //aqui cria um usuario padrao remvoer quando for pra produção pelo amor de Deus
            const userAdmin = await repo.create(UserPadrao);
            await repo.save(userAdmin)
        }


        const app = express()
        app.use(express.json())
        app.use('/aulas', aulasRoutes)
        app.use('/usuarios', userRoutes)
        app.use('/login', routeLogin)
        app.use('/alunos', alunoRoutes)
        app.use('/pagamentos', pagamentoRoutes)
        app.use('/progresso', progressoRoutes)
        app.listen(process.env.PORT, () => {
            console.log('Servidor rodando na porta: ', process.env.PORT);

        })

    }).catch((error) => {
        console.log('Banco de dados não conectado. ', error)
    })