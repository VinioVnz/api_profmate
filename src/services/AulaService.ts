import { AppDataSource } from "../database/data-source";
import { Aula } from "../entities/Aula";

const repo = AppDataSource.getRepository(Aula)

export const AulaService = {
    async getAll(): Promise<Aula[]> {
        return await repo.find()
    },

    async getOne(id: number): Promise<Aula | null>{
        return await repo.findOneBy({id})
    },

    async create(data: Partial<Aula>): Promise<Aula>{
        const aula = repo.create(data)
        await repo.save(aula)
        return aula;
    },
    async update(id: number, data: Partial<Aula>): Promise<Aula | null> {
        const aula = await repo.findOneBy({id})
        if(!aula) return null
        repo.merge(aula, data)

        repo.save(aula)
        return aula;
    },
    
    async delete(id:number):Promise<Aula | null>{
        const aula = await repo.findOneBy({id})
        if(!aula) return null

        await repo.remove(aula)
        return aula;
    }
}
