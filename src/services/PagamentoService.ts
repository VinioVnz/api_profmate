import { AppDataSource } from "../database/data-source";
import { Pagamento } from "../entities/Pagamento";

const repo = AppDataSource.getRepository(Pagamento)

export const PagamentoService = {
    async getAll(): Promise<Pagamento[]> {
        return await repo.find({ relations: ["aluno"] })
    },

    async getOne(id: number): Promise<Pagamento | null>{
        return await repo.findOne({
            where: {id},
            relations:['aluno']

        })
    },

    async create(data: Partial<Pagamento>): Promise<Pagamento>{
        const pagamento = repo.create(data)

        await repo.save(pagamento)
        return pagamento;
    },
    async update(id: number, data: Partial<Pagamento>): Promise<Pagamento | null> {
        const pagamento = await repo.findOneBy({id})
        if(!pagamento) return null
        repo.merge(pagamento, data)

        await repo.save(pagamento)
        return pagamento;
    },
    
    async delete(id:number):Promise<Pagamento | null>{
        const pagamento = await repo.findOneBy({id})
        if(!pagamento) return null

        await repo.remove(pagamento)
        return pagamento;
    }
}
