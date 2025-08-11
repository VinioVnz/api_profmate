import { AppDataSource } from "../database/data-source";
import { Progresso } from "../entities/Progresso";

const repo = AppDataSource.getRepository(Progresso);

export const ProgressoService = {
    async getAll(): Promise<Progresso[]> {
        return await repo.find();
    },

    async getOne(id: number): Promise<Progresso | null> {
        return await repo.findOneBy({ id });
    },

    async create(data: Partial<Progresso>): Promise<Progresso> {
        const progresso = repo.create(data);
        await repo.save(progresso);
        return progresso;
    },

    async update(id: number, data: Partial<Progresso>): Promise<Progresso | null> {
        const progresso = await repo.findOneBy({ id });
        if (!progresso) return null;
        repo.merge(progresso, data);
        await repo.save(progresso);
        return progresso;
    },

    async delete(id: number): Promise<Progresso | null> {
        const progresso = await repo.findOneBy({ id });
        if (!progresso) return null;
        await repo.remove(progresso);
        return progresso;
    }
};