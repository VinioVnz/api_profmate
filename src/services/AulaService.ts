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

    async create(data: { data: string; aluno_id: number, horario: string }): Promise<Aula | null> {
        const aluno = await alunoRepo.findOneBy({ id: data.aluno_id });
        if (!aluno) return null;

        const aula = repo.create({ data: data.data, horario: data.horario, aluno });
        await repo.save(aula);
        return aula;
    },
    async update(id: number, data: { data?: string; horario?: string; aluno_id?: number }): Promise<Aula | null> {
        const aula = await repo.findOne({ where: { id }, relations: ["aluno"] });
        if (!aula) return null;

        if (data.data) aula.data = data.data;
        if (data.horario) aula.horario = data.horario;

        if (data.aluno_id) {
            const aluno = await alunoRepo.findOneBy({ id: data.aluno_id });
            if (!aluno) return null;
            aula.aluno = aluno;
        }

        await repo.save(aula);
        return aula;
    },


    async delete(id: number): Promise<Aula | null> {
        const aula = await repo.findOneBy({ id })
        if (!aula) return null

        await repo.remove(aula)
        return aula;
    }
}
