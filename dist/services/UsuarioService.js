"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const data_source_1 = require("../database/data-source");
const Usuario_1 = require("../entities/Usuario");
const bcript = require('bcrypt');
const saltRounds = 10;
const repo = data_source_1.AppDataSource.getRepository(Usuario_1.Usuario);
exports.UsuarioService = {
    async getAll() {
        return await repo.find({
            select: ['id', 'nome', 'email']
        });
    },
    async getOne(id) {
        return await repo.findOneBy({ id });
    },
    async create(data) {
        data.password = await bcript.hash(data.password, saltRounds);
        const user = repo.create(data);
        await repo.save(user);
        return {
            id: user.id,
            nome: user.nome,
            email: user.email
        };
    },
    async update(id, data) {
        data.password = await bcript.hash(data.password, saltRounds);
        const user = await repo.findOneBy({ id });
        if (!user)
            return null;
        repo.merge(user, data);
        await repo.save(user);
        return {
            id: user.id,
            nome: user.nome,
            email: user.email
        };
    },
    async delete(id) {
        const user = await repo.findOneBy({ id });
        if (!user)
            return null;
        await repo.remove(user);
        return user;
    }
};
