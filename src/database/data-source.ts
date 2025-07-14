import dotenv from 'dotenv'
import { DataSource } from 'typeorm'
import { Aula } from '../entities/Aula'
import { Usuario } from '../entities/Usuario'

dotenv.config()

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Aula, Usuario],
    migrations: ['dist/database/migrations/*.js'],
    synchronize: Boolean(process.env.DB_SYNC)
})