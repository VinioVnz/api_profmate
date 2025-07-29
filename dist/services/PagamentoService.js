"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoService = void 0;
const data_source_1 = require("../database/data-source");
const Pagamento_1 = require("../entities/Pagamento");
const repo = data_source_1.AppDataSource.getRepository(Pagamento_1.Pagamento);
exports.PagamentoService = {
    async getAll() {
        return await repo.find({ relations: ["aluno"] });
    },
    async getOne(id) {
        return await repo.findOne({
            where: { id },
            relations: ['aluno']
        });
    },
    async create(data) {
        const pagamento = repo.create(data);
        await repo.save(pagamento);
        return pagamento;
    },
    async update(id, data) {
        const pagamento = await repo.findOneBy({ id });
        if (!pagamento)
            return null;
        repo.merge(pagamento, data);
        await repo.save(pagamento);
        return pagamento;
    },
    async delete(id) {
        const pagamento = await repo.findOneBy({ id });
        if (!pagamento)
            return null;
        await repo.remove(pagamento);
        return pagamento;
    }
};
