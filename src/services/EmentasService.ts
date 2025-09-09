import { AppDataSource } from "../database/data-source";
import { Aluno } from "../entities/Aluno";
import { Ementas } from "../entities/Ementas";

const repo = AppDataSource.getRepository(Ementas);
const alunoRepo = AppDataSource.getRepository(Aluno);
export const EmentasService = {
    async getAll(): Promise<Ementas[]> {
        return await repo.find({relations: ["aluno"]});
    },

    async getOne(id: number): Promise<Ementas | null> {
        return await repo.findOneBy({ id });
    },

    async create(data: Partial<Ementas> & { aluno_id?: number }): Promise<Ementas | null> {
        if (!data.aluno_id) {
            return null;
        }
        const aluno = await alunoRepo.findOneBy({ id: data.aluno_id });
        if (!aluno) {
            return null;
        }

        const ementas = repo.create({
            ...data,
            aluno
        });
        await repo.save(ementas);
        return ementas;
    },

    async update(id: number, data: Partial<Ementas>): Promise<Ementas | null> {
        const ementas = await repo.findOneBy({ id });
        if (!ementas) return null;
        repo.merge(ementas, data);
        await repo.save(ementas);
        return ementas;
    },

    async delete(id: number): Promise<Ementas | null> {
        const ementas = await repo.findOneBy({ id });
        if (!ementas) return null;
        await repo.remove(ementas);
        return ementas;
    }
};