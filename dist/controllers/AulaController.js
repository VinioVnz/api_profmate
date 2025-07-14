"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulaController = void 0;
const AulaService_1 = require("../services/AulaService");
const notFound = "Aula não encontrada!";
const serverError = "Erro ao realizar a operação!";
exports.AulaController = {
    async getAll(req, res) {
        try {
            const aula = await AulaService_1.AulaService.getAll();
            res.json(aula);
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async getOne(req, res) {
        try {
            const aula = await AulaService_1.AulaService.getOne(Number(req.params.id));
            if (!aula)
                res.status(404).json({ error: notFound });
            res.json(aula);
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async create(req, res) {
        try {
            const aula = await AulaService_1.AulaService.create(req.body);
            if (!aula)
                res.status(201).json(aula);
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async update(req, res) {
        try {
            const updateData = await AulaService_1.AulaService.update(Number(req.params.id), req.body);
            if (!updateData)
                res.status(404).json({ error: notFound });
            res.json('Aula editada com sucesso');
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async delete(req, res) {
        try {
            const delAula = await AulaService_1.AulaService.delete(Number(req.params.id));
            if (!delAula)
                res.status(404).json({ error: notFound });
            res.json("Aula deletada com sucesso!");
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    }
};
