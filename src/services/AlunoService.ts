import { AppDataSource } from "../database/data-source";
import { Aluno } from "../entities/Aluno";
import { Pagamento } from "../entities/Pagamento";

const repo = AppDataSource.getRepository(Aluno)
const pagamentoRepo = AppDataSource.getRepository(Pagamento)
export const AlunoService = {
    async getAll(): Promise<Aluno[]> {
        return await repo.find({ relations: ["pagamentos"] })
    },

    async getOne(id: number): Promise<Aluno | null> {
        return await repo.findOne({
            where: { id },
            relations: ['pagamentos']

        })
    },

    async create(data: Partial<Aluno>): Promise<Aluno> {
        const aluno = repo.create(data)

        await repo.save(aluno)
        return aluno;
    },
    async update(id: number, data: Partial<Aluno>): Promise<Aluno | null> {
        const aluno = await repo.findOneBy({ id })
        if (!aluno) return null
        repo.merge(aluno, data)

        await repo.save(aluno)
        return aluno;
    },

    async delete(id: number): Promise<Aluno | null> {
        const aluno = await repo.findOneBy({ id })
        if (!aluno) return null
        await pagamentoRepo
            .createQueryBuilder()
            .delete()
            .where("aluno_id = :id", { id })
            .execute();
            
        await repo.remove(aluno)
        return aluno;
    }
}
