"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoService = void 0;
const data_source_1 = require("../database/data-source");
const Aluno_1 = require("../entities/Aluno");
const repo = data_source_1.AppDataSource.getRepository(Aluno_1.Aluno);
exports.AlunoService = {
    async getAll() {
        return await repo.find({ relations: ["pagamentos"] });
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
        await repo.remove(aluno);
        return aluno;
    }
};
