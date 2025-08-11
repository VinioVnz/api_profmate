"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressoController = void 0;
const notFound = "Progresso não encontrado!";
const serverError = "Erro ao realizar a operação!";
const ProgressoService_1 = require("../services/ProgressoService");
exports.ProgressoController = {
    async getAll(req, res) {
        try {
            const progresso = await ProgressoService_1.ProgressoService.getAll();
            res.json(progresso);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: serverError });
        }
    },
    async getOne(req, res) {
        try {
            const progresso = await ProgressoService_1.ProgressoService.getOne(Number(req.params.id));
            if (!progresso)
                res.status(404).json({ error: notFound });
            res.json(progresso);
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async create(req, res) {
        try {
            const progresso = await ProgressoService_1.ProgressoService.create(req.body);
            if (!progresso)
                res.status(404).json({ error: notFound });
            res.status(201).json(progresso);
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async update(req, res) {
        try {
            const updateData = await ProgressoService_1.ProgressoService.update(Number(req.params.id), req.body);
            if (!updateData)
                res.status(404).json({ error: notFound });
            res.json('Progresso editado com sucesso');
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async delete(req, res) {
        try {
            const delProgresso = await ProgressoService_1.ProgressoService.delete(Number(req.params.id));
            if (!delProgresso)
                res.status(404).json({ error: notFound });
            res.json("Progresso deletado com sucesso!");
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    }
};
