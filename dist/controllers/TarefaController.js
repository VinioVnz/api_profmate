"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaController = void 0;
const TarefaService_1 = require("../services/TarefaService");
const notFound = "Tarefa não encontrada";
const serverError = "Erro ao realizar operação";
exports.TarefaController = {
    async getAll(req, res) {
        try {
            const tarefa = await TarefaService_1.TarefaService.getAll();
            res.json(tarefa);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: serverError });
        }
    },
    async getOne(req, res) {
        try {
            const tarefa = await TarefaService_1.TarefaService.getOne(Number(req.params.id));
            if (tarefa) {
                res.status(404).json({ error: notFound });
                res.json(tarefa);
            }
        }
        catch (error) {
            res.status(500).json({ eror: serverError });
        }
    },
    async create(req, res) {
        try {
            const tarefa = await TarefaService_1.TarefaService.create(req.body);
            if (tarefa) {
                res.status(404).json({ error: notFound });
                res.status(201).json(tarefa);
            }
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async update(req, res) {
        try {
            const updateData = await TarefaService_1.TarefaService.update(Number(req.params.id), req.body);
            if (updateData) {
                if (!updateData) {
                    res.status(404).json({ error: notFound });
                }
                res.json('Tarefa editada com sucesso');
            }
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async delete(req, res) {
        const deltarefa = await TarefaService_1.TarefaService.delete(Number(req.params.id));
        try {
            if (deltarefa) {
                res.status(404).json({ error: notFound });
                res.json("Tarefa deletada com sucesso!");
            }
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    }
};
