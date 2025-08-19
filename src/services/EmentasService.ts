import { AppDataSource } from "../database/data-source";
import { Ementas } from "../entities/Ementas";

const repo = AppDataSource.getRepository(Ementas);

export const EmentasService = {
    async getAll(): Promise<Ementas[]> {
        return await repo.find();
    },

    async getOne(id: number): Promise<Ementas | null> {
        return await repo.findOneBy({ id });
    },

    async create(data: Partial<Ementas>): Promise<Ementas> {
        const ementas = repo.create(data);
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