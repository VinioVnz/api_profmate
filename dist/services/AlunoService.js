"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoService = void 0;
const data_source_1 = require("../database/data-source");
const Aluno_1 = require("../entities/Aluno");
const Pagamento_1 = require("../entities/Pagamento");
const Usuario_1 = require("../entities/Usuario");
const repo = data_source_1.AppDataSource.getRepository(Aluno_1.Aluno);
const pagamentoRepo = data_source_1.AppDataSource.getRepository(Pagamento_1.Pagamento);
const userRepo = data_source_1.AppDataSource.getRepository(Usuario_1.Usuario);
exports.AlunoService = {
    async getAll(uid) {
        return await repo.find({
            relations: ["pagamentos", "usuario"],
            where: { usuario: { uid } }
        });
    },
    async getOne(id) {
        return await repo.findOne({
            where: { id },
            relations: ['pagamentos']
        });
    },
    async create(data, uid) {
        const usuario = await userRepo.findOneBy({ uid });
        if (!usuario)
            throw new Error("Usuário não encontrado");
        const aluno = repo.create({ ...data, usuario });
        await repo.save(aluno);
        return aluno;
    },
    async update(id, data) {
        const aluno = await repo.findOneBy({ id });
        if (!aluno)
            return null;
        repo.merge(aluno, data);
        await repo.save(aluno);
        return aluno;
    },
    async delete(id) {
        const aluno = await repo.findOneBy({ id });
        if (!aluno)
            return null;
        await pagamentoRepo
            .createQueryBuilder()
            .delete()
            .where("aluno_id = :id", { id })
            .execute();
        await repo.remove(aluno);
        return aluno;
    }
};
