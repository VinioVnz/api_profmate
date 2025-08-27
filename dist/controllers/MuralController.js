"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuralController = void 0;
const MuralService_1 = require("../services/MuralService");
const notFound = "Mural não encontrado!";
const serverError = "Erro ao realizar a operação!";
exports.MuralController = {
    async getAll(req, res) {
        try {
            const mural = await MuralService_1.MuralService.getAll();
            res.json(mural);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: serverError });
        }
    },
    async getOne(req, res) {
        try {
            const mural = await MuralService_1.MuralService.getOne(Number(req.params.id));
            if (!mural)
                res.status(404).json({ error: notFound });
            res.json(mural);
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async create(req, res) {
        try {
            console.log(req.body);
            const mural = await MuralService_1.MuralService.create(req.body);
            if (!mural) {
                res.status(404).json({ error: "Usuario não encontrado" });
            }
            ;
            res.status(201).json(mural);
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async update(req, res) {
        try {
            const updateData = await MuralService_1.MuralService.update(Number(req.params.id), req.body);
            if (!updateData)
                res.status(404).json({ error: notFound });
            res.json('Mural editado com sucesso');
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async delete(req, res) {
        try {
            const delMural = await MuralService_1.MuralService.delete(Number(req.params.id));
            if (!delMural)
                res.status(404).json({ error: notFound });
            res.json("Mural deletado com sucesso!");
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    }
};
