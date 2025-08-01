import { AppDataSource } from "../database/data-source";
import { Tarefa } from "../entities/Tarefa";
import { Usuario } from "../entities/Usuario";


const repo = AppDataSource.getRepository(Tarefa)
const UsuarioRepo = AppDataSource.getRepository(Usuario)
export const TarefaService = {
    async getAll(): Promise<Tarefa[]> {
        return await repo.find({
            relations: ["tarefa"]
        })
    },

    async getOne(id: number): Promise<Tarefa | null> {
        return await repo.findOneBy({ id })
    },

    async create(data: { data: string, usuario_id: number }): Promise<Tarefa | null> {
        const usuario = await UsuarioRepo.findOneBy({ id: data.usuario_id });
        if (!usuario) {
            return null
        }
        const tarefa = repo.create({ descricao: data.data, usuario });
        await repo.save(tarefa);
        return tarefa;
    },

    async update(id: number, data: Partial<Tarefa>): Promise<Tarefa | null> {
        const tarefa = await repo.findOneBy({ id });
        if (!tarefa) {
            return null;
        }
        repo.merge(tarefa, data)
        repo.save(tarefa)
        return tarefa;
    },

    async delete(id: number): Promise<Tarefa | null> {
        const tarefa = await repo.findOneBy({ id })
        if (!tarefa) {
            return null
        }

        await repo.remove(tarefa);
        return tarefa;
    }
}