import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Aula } from '../entities/Aula';
import { Usuario } from '../entities/Usuario';
import { Aluno } from '../entities/Aluno';
import { Pagamento } from '../entities/Pagamento';
import { Tarefa } from '../entities/Tarefa';
import { Ementa } from '../entities/Ementas';
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Aula, Usuario, Aluno, Pagamento, Tarefa,Ementa],
    migrations: ['dist/database/migrations/*.js'],
    synchronize: Boolean(process.env.DB_SYNC),
});
