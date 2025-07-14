import { AppDataSource } from "../database/data-source";
import { Usuario } from "../entities/Usuario";
const bcript = require('bcrypt')
const saltRounds = 10

const repo = AppDataSource.getRepository(Usuario)
type UsuarioRetorno = {
    id: number,
    nome: string,
    email: string
}

export const UsuarioService = {
    async getAll(): Promise<Usuario[]> {
        return await repo.find({
            select: ['id', 'nome', 'email']
        })
    },
    async getOne(id: number): Promise<Usuario | null> {
        return await repo.findOneBy({ id })
    },

    async create(data: Partial<Usuario>): Promise<UsuarioRetorno> {
        data.password = await bcript.hash(data.password, saltRounds)
        const user = repo.create(data)
        await repo.save(user)

        return {
            id: user.id,
            nome: user.nome,
            email: user.email
        };
    },

    async update(id: number, data: Partial<Usuario>): Promise<UsuarioRetorno | null> {
        data.password = await bcript.hash(data.password, saltRounds)
        const user = await repo.findOneBy({ id })
        if (!user) return null
        repo.merge(user, data)
        await repo.save(user)
        return {
            id: user.id,
            nome: user.nome,
            email: user.email
        }
    },

    async delete(id: number): Promise<Usuario | null> {
        const user = await repo.findOneBy({ id })
        if (!user) return null

        await repo.remove(user)
        return user
    }
}