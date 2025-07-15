import { AppDataSource } from "../database/data-source";
import { Aluno } from "../entities/Aluno";

const repo = AppDataSource.getRepository(Aluno)

export const AlunoService = {
    async getAll(): Promise<Aluno[]> {
        return await repo.find()
    },

    async getOne(id: number): Promise<Aluno | null>{
        return await repo.findOneBy({id})
    },

    async create(data: Partial<Aluno>): Promise<Aluno>{
        const aluno = repo.create(data)

        await repo.save(aluno)
        return aluno;
    },
    async update(id: number, data: Partial<Aluno>): Promise<Aluno | null> {
        const aluno = await repo.findOneBy({id})
        if(!aluno) return null
        repo.merge(aluno, data)

        repo.save(aluno)
        return aluno;
    },
    
    async delete(id:number):Promise<Aluno | null>{
        const aluno = await repo.findOneBy({id})
        if(!aluno) return null

        await repo.remove(aluno)
        return aluno;
    }
}
