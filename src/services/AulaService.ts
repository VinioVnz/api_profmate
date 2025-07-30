import { AppDataSource } from "../database/data-source";
import { Aluno } from "../entities/Aluno";
import { Aula } from "../entities/Aula";

const repo = AppDataSource.getRepository(Aula)
const alunoRepo = AppDataSource.getRepository(Aluno);
export const AulaService = {
    async getAll(): Promise<Aula[]> {
        return await repo.find({
            relations: ["aluno"]
        })
    },

    async getOne(id: number): Promise<Aula | null> {
        return await repo.findOneBy({ id })
    },

    async create(data: { data: string; aluno_id: number }): Promise<Aula | null> {
        const aluno = await alunoRepo.findOneBy({ id: data.aluno_id });
        if (!aluno) return null;

        const aula = repo.create({ data: data.data, aluno });
        await repo.save(aula);
        return aula;
    },
    async update(id: number, data: Partial<Aula>): Promise<Aula | null> {
        const aula = await repo.findOneBy({ id })
        if (!aula) return null
        repo.merge(aula, data)

        repo.save(aula)
        return aula;
    },

    async delete(id: number): Promise<Aula | null> {
        const aula = await repo.findOneBy({ id })
        if (!aula) return null

        await repo.remove(aula)
        return aula;
    }

    
}
