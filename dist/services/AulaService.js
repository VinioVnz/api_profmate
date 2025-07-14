"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulaService = void 0;
const data_source_1 = require("../database/data-source");
const Aula_1 = require("../entities/Aula");
const repo = data_source_1.AppDataSource.getRepository(Aula_1.Aula);
exports.AulaService = {
    async getAll() {
        return await repo.find();
    },
    async getOne(id) {
        return await repo.findOneBy({ id });
    },
    async create(data) {
        const aula = repo.create(data);
        await repo.save(aula);
        return aula;
    },
    async update(id, data) {
        const aula = await repo.findOneBy({ id });
        if (!aula)
            return null;
        repo.merge(aula, data);
        repo.save(aula);
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
