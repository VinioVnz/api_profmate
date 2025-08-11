"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressoService = void 0;
const data_source_1 = require("../database/data-source");
const Progresso_1 = require("../entities/Progresso");
const repo = data_source_1.AppDataSource.getRepository(Progresso_1.Progresso);
exports.ProgressoService = {
    async getAll() {
        return await repo.find();
    },
    async getOne(id) {
        return await repo.findOneBy({ id });
    },
    async create(data) {
        const progresso = repo.create(data);
        await repo.save(progresso);
        return progresso;
    },
    async update(id, data) {
        const progresso = await repo.findOneBy({ id });
        if (!progresso)
            return null;
        repo.merge(progresso, data);
        await repo.save(progresso);
        return progresso;
    },
    async delete(id) {
        const progresso = await repo.findOneBy({ id });
        if (!progresso)
            return null;
        await repo.remove(progresso);
        return progresso;
    }
};
