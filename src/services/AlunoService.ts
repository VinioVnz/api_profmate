import { AppDataSource } from "../database/data-source";
import { Aluno } from "../entities/Aluno";
import { Pagamento } from "../entities/Pagamento";
import { Usuario } from "../entities/Usuario";

const repo = AppDataSource.getRepository(Aluno)
const pagamentoRepo = AppDataSource.getRepository(Pagamento)
const userRepo = AppDataSource.getRepository(Usuario)
export const AlunoService = {
    async getAll(uid: string): Promise<Aluno[]> {
        return await repo.find({
            relations: ["pagamentos", "usuario"],
            where: { usuario: { uid } }
        })
    },

    async getOne(id: number): Promise<Aluno | null> {
        return await repo.findOne({
            where: { id },
            relations: ['pagamentos']

        })
    },

    async create(data: Partial<Aluno>, uid: string): Promise<Aluno> {
        const usuario = await userRepo.findOneBy({ uid });
        if (!usuario) throw new Error("Usuário não encontrado");
        
        const aluno = repo.create({ ...data, usuario });
        await repo.save(aluno);
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
