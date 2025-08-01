import { AppDataSource } from "../database/data-source";
import { Pagamento } from "../entities/Pagamento";
import { Aluno } from "../entities/Aluno";
const repo = AppDataSource.getRepository(Pagamento)
const alunoRepo = AppDataSource.getRepository(Aluno);
export const PagamentoService = {
    async getAll(): Promise<Pagamento[]> {
        return await repo.find({ relations: ["aluno"] })
    },

    async getOne(id: number): Promise<Pagamento | null> {
        return await repo.findOne({
            where: { id },
            relations: ['aluno']

        })
    },

    async create(data: Partial<Pagamento>): Promise<Pagamento> {
        const pagamento = repo.create(data)
        //perguntei pro chat sobre a relaçaõ de aluno e pagamento, ele disse q criando essas paradinhas 
        //ia funcionar
         const alunoId = (data as any).aluno_id;
        if (alunoId) {
            const aluno = await alunoRepo.findOneBy({ id: alunoId });
            if (!aluno) throw new Error("Aluno não encontrado");
            pagamento.aluno = aluno;  // atribui a entidade, não só o id
        }
        await repo.save(pagamento)
        return pagamento;
    },
    async update(id: number, data: Partial<Pagamento>): Promise<Pagamento | null> {
        const pagamento = await repo.findOneBy({ id })
        if (!pagamento) return null
        repo.merge(pagamento, data)

        await repo.save(pagamento)
        return pagamento;
    },

    async delete(id: number): Promise<Pagamento | null> {
        const pagamento = await repo.findOneBy({ id })
        if (!pagamento) return null

        await repo.remove(pagamento)
        return pagamento;
    }
}
