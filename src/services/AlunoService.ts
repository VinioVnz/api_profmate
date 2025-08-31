import { AppDataSource } from "../database/data-source";
import { Aluno } from "../entities/Aluno";
import { Pagamento } from "../entities/Pagamento";
import { Usuario } from "../entities/Usuario";

const repo = AppDataSource.getRepository(Aluno)
const pagamentoRepo = AppDataSource.getRepository(Pagamento)
const userRepo = AppDataSource.getRepository(Usuario)
export const AlunoService = {

      async getAll(): Promise<Aluno[]> {
        return await repo.find({
            relations: ["pagamentos", "usuario"],
            
        });
    },

    async getOne(id: number): Promise<Aluno | null> {
        return await repo.findOne({
            where: { id },
            relations: ['pagamentos']

        })
    },

    async create(data: Partial<Aluno>, id: number): Promise<Aluno> {
        const usuario = await userRepo.findOneBy({ id });
        if (!usuario) throw new Error("Usuário não encontrado");

        const aluno = repo.create({ ...data, usuario });
        await repo.save(aluno);
        return aluno;
    },

    async update(id: number, data: Partial<Aluno>): Promise<Aluno | null> {
        const aluno = await repo.findOne({
            where: { id}
        });
        if (!aluno) return null;
       // console.log(aluno);
        //console.log(data);
        repo.merge(aluno, data);
        await repo.save(aluno);
        return aluno;
    },

    async delete(id: number): Promise<boolean> {
        const aluno = await repo.findOne({
            where: { id },
            relations: ["pagamentos"]
        });

        if (!aluno) return false;

        await pagamentoRepo
            .createQueryBuilder()
            .delete()
            .where("aluno_id = :id", { id })
            .execute();

        await repo.remove(aluno);
        return true;
    }
}
