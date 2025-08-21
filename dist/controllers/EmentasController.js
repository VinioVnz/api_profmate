"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmentasController = void 0;
const notFound = "Ementas não encontrado!";
const serverError = "Erro ao realizar a operação!";
const EmentasService_1 = require("../services/EmentasService");
exports.EmentasController = {
    async getAll(req, res) {
        try {
            const ementas = await EmentasService_1.EmentasService.getAll();
            res.json(ementas);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: serverError });
        }
    },
    async getOne(req, res) {
        try {
            const ementas = await EmentasService_1.EmentasService.getOne(Number(req.params.id));
            if (!ementas)
                res.status(404).json({ error: notFound });
            res.json(ementas);
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async create(req, res) {
        try {
            const ementa = await EmentasService_1.EmentasService.create(req.body);
            if (!ementa) {
                res.status(400).json({ error: "Erro ao criar a ementa" });
            }
            res.status(201).json(ementa);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: serverError });
        }
    },
    async update(req, res) {
        try {
            const updateData = await EmentasService_1.EmentasService.update(Number(req.params.id), req.body);
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
            const delProgresso = await EmentasService_1.EmentasService.delete(Number(req.params.id));
            if (!delProgresso)
                res.status(404).json({ error: notFound });
            res.json("Progresso deletado com sucesso!");
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    }
};
