"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoController = void 0;
const PagamentoService_1 = require("../services/PagamentoService");
const notFound = "Pagamento não encontrado!";
const serverError = "Erro ao realizar a operação!";
exports.PagamentoController = {
    async getAll(req, res) {
        try {
            const pagamento = await PagamentoService_1.PagamentoService.getAll();
            res.json(pagamento);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: serverError });
        }
    },
    async getOne(req, res) {
        try {
            const pagamento = await PagamentoService_1.PagamentoService.getOne(Number(req.params.id));
            if (!pagamento)
                res.status(404).json({ error: notFound });
            res.json(pagamento);
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async create(req, res) {
        try {
            const pagamento = await PagamentoService_1.PagamentoService.create(req.body);
            if (!pagamento)
                res.status(404).json({ error: notFound });
            res.status(201).json(pagamento);
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async update(req, res) {
        try {
            const updateData = await PagamentoService_1.PagamentoService.update(Number(req.params.id), req.body);
            if (!updateData)
                res.status(404).json({ error: notFound });
            res.json('Pagamento editado com sucesso');
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async delete(req, res) {
        try {
            const delPagamento = await PagamentoService_1.PagamentoService.delete(Number(req.params.id));
            if (!delPagamento)
                res.status(404).json({ error: notFound });
            res.json("Pagamento deletado com sucesso!");
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    }
};
