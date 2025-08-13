"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmentasService = void 0;
const data_source_1 = require("../database/data-source");
const Ementas_1 = require("../entities/Ementas");
const repo = data_source_1.AppDataSource.getRepository(Ementas_1.Ementa);
exports.EmentasService = {
    async getAll() {
        return await repo.find();
    },
    async getOne(id) {
        return await repo.findOneBy({ id });
    },
    async create(data) {
        const ementas = repo.create(data);
        await repo.save(ementas);
        return ementas;
    },
    async update(id, data) {
        const ementas = await repo.findOneBy({ id });
        if (!ementas)
            return null;
        repo.merge(ementas, data);
        await repo.save(ementas);
        return ementas;
    },
    async delete(id) {
        const ementas = await repo.findOneBy({ id });
        if (!ementas)
            return null;
        await repo.remove(ementas);
        return ementas;
    }
};
