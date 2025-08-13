import { AppDataSource } from "../database/data-source";
import { Ementa } from "../entities/Ementas";

const repo = AppDataSource.getRepository(Ementa);

export const EmentasService = {
    async getAll(): Promise<Ementa[]> {
        return await repo.find();
    },

    async getOne(id: number): Promise<Ementa | null> {
        return await repo.findOneBy({ id });
    },

    async create(data: Partial<Ementa>): Promise<Ementa> {
        const ementas = repo.create(data);
        await repo.save(ementas);
        return ementas;
    },

    async update(id: number, data: Partial<Ementa>): Promise<Ementa | null> {
        const ementas = await repo.findOneBy({ id });
        if (!ementas) return null;
        repo.merge(ementas, data);
        await repo.save(ementas);
        return ementas;
    },

    async delete(id: number): Promise<Ementa | null> {
        const ementas = await repo.findOneBy({ id });
        if (!ementas) return null;
        await repo.remove(ementas);
        return ementas;
    }
};