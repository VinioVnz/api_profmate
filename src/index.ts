import express  from "express"
import 'reflect-metadata';
import aulasRoutes from './routes/aula.routes'
import { AppDataSource } from "./database/data-source";

AppDataSource.initialize()
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use('/aulas', aulasRoutes)

        app.listen(process.env.PORT, () => {
        console.log('Servidor rodando na porta: ', process.env.PORT);
    })

}).catch((error) => {
    console.log('Banco de dados não conectado. ',error)
})