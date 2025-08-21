"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulaService = void 0;
const data_source_1 = require("../database/data-source");
const Aluno_1 = require("../entities/Aluno");
const Aula_1 = require("../entities/Aula");
const repo = data_source_1.AppDataSource.getRepository(Aula_1.Aula);
const alunoRepo = data_source_1.AppDataSource.getRepository(Aluno_1.Aluno);
exports.AulaService = {
    async getAll() {
        return await repo.find({
            relations: ["aluno"]
        });
    },
    async getOne(id) {
        return await repo.findOneBy({ id });
    },
    async create(data) {
        const aluno = await alunoRepo.findOneBy({ id: data.aluno_id });
        if (!aluno)
            return null;
        const aula = repo.create({ data: data.data, horario: data.horario, aluno });
        await repo.save(aula);
        return aula;
    },
    async update(id, data) {
        const aula = await repo.findOne({ where: { id }, relations: ["aluno"] });
        if (!aula)
            return null;
        if (data.data)
            aula.data = data.data;
        if (data.horario)
            aula.horario = data.horario;
        if (data.aluno_id) {
            const aluno = await alunoRepo.findOneBy({ id: data.aluno_id });
            if (!aluno)
                return null;
            aula.aluno = aluno;
        }
        await repo.save(aula);
        return aula;
    },
    async delete(id) {
        const aula = await repo.findOneBy({ id });
        if (!aula)
            return null;
        await repo.remove(aula);
        return aula;
    }
};
