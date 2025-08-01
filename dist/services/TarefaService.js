"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaService = void 0;
const data_source_1 = require("../database/data-source");
const Tarefa_1 = require("../entities/Tarefa");
const Usuario_1 = require("../entities/Usuario");
const repo = data_source_1.AppDataSource.getRepository(Tarefa_1.Tarefa);
const UsuarioRepo = data_source_1.AppDataSource.getRepository(Usuario_1.Usuario);
exports.TarefaService = {
    async getAll() {
        return await repo.find({
            relations: ["tarefa"]
        });
    },
    async getOne(id) {
        return await repo.findOneBy({ id });
    },
    async create(data) {
        const usuario = await UsuarioRepo.findOneBy({ id: data.usuario_id });
        if (!usuario) {
            return null;
        }
        const tarefa = repo.create({ descricao: data.data, usuario });
        await repo.save(tarefa);
        return tarefa;
    },
    async update(id, data) {
        const tarefa = await repo.findOneBy({ id });
        if (!tarefa) {
            return null;
        }
        repo.merge(tarefa, data);
        repo.save(tarefa);
        return tarefa;
    },
    async delete(id) {
        const tarefa = await repo.findOneBy({ id });
        if (!tarefa) {
            return null;
        }
        await repo.remove(tarefa);
        return tarefa;
    }
};
