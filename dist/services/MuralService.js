"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuralService = void 0;
const data_source_1 = require("../database/data-source");
const Mural_1 = require("../entities/Mural");
const Usuario_1 = require("../entities/Usuario");
const repo = data_source_1.AppDataSource.getRepository(Mural_1.Mural);
const Userrepo = data_source_1.AppDataSource.getRepository(Usuario_1.Usuario);
exports.MuralService = {
    async getAll() {
        return await repo.find({
            relations: ["usuario"]
        });
    },
    async getOne(id) {
        return await repo.findOneBy({ id });
    },
    async create(data) {
        const usuario = await Userrepo.findOneBy({ id: data.usuario_id });
        if (!usuario)
            return null;
        const mural = repo.create(data);
        await repo.save(mural);
        return mural;
    },
    async update(id, data) {
        const mural = await repo.findOne({ where: { id }, relations: ["usuario"] });
        if (!mural)
            return null;
        if (data.recado)
            mural.recado = data.recado;
        if (data.dataHora)
            mural.dataHora = data.dataHora;
        if (data.usuario_id) {
            const usuario = await Userrepo.findOneBy({ id: data.usuario_id });
            if (!usuario)
                return null;
            mural.usuario = usuario;
        }
        await repo.save(mural);
        return mural;
    },
    async delete(id) {
        const mural = await repo.findOneBy({ id });
        if (!mural)
            return null;
        await repo.remove(mural);
        return mural;
    }
};
