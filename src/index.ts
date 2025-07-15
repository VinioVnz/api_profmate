import express  from "express"
import 'reflect-metadata';
import aulasRoutes from './routes/aula.routes'
import userRoutes from './routes/usuario.routes'
import routeLogin from './routes/auth.routes'
import alunoRoutes from './routes/aluno.routes'
import { AppDataSource } from "./database/data-source";
require('dotenv').config();

AppDataSource.initialize()
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use('/aulas', aulasRoutes)
        app.use('/usuarios',userRoutes)
        app.use('/login', routeLogin)
        app.use('/alunos',alunoRoutes)
        app.listen(process.env.PORT, () => {
        console.log('Servidor rodando na porta: ', process.env.PORT);
    })

}).catch((error) => {
    console.log('Banco de dados não conectado. ',error)
})