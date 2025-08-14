"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoService = void 0;
const data_source_1 = require("../database/data-source");
const Aluno_1 = require("../entities/Aluno");
const Pagamento_1 = require("../entities/Pagamento");
const repo = data_source_1.AppDataSource.getRepository(Aluno_1.Aluno);
const pagamentoRepo = data_source_1.AppDataSource.getRepository(Pagamento_1.Pagamento);
exports.AlunoService = {
    async getAll(usuarioId) {
        return await repo.find({
            relations: ["pagamentos"],
            where: { usuario: { id: usuarioId } }
        });
    },
    async getOne(id) {
        return await repo.findOne({
            where: { id },
            relations: ['pagamentos']
        });
    },
    async create(data) {
        const aluno = repo.create(data);
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
