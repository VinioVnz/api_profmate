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
            if (!tarefa) {
                res.status(404).json({ error: notFound });
            }
            res.json(tarefa);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: serverError });
        }
    },
    async create(req, res) {
        try {
            const tarefa = await TarefaService_1.TarefaService.create(req.body);
            if (!tarefa) {
                res.status(400).json({ error: "Usuário inválido ou dados incompletos" });
            }
            res.status(201).json(tarefa);
        }
        catch (e) {
            console.log("ERRO: ", e);
            res.status(500).json({ error: serverError });
        }
    },
    async update(req, res) {
        try {
            const updateData = await TarefaService_1.TarefaService.update(Number(req.params.id), req.body);
            if (!updateData) {
                res.status(404).json({ error: notFound });
            }
            res.json(updateData); // retorna a tarefa atualizada
        }
        catch (e) {
            console.log(e);
            res.status(500).json({ error: serverError });
        }
    },
    async delete(req, res) {
        const deltarefa = await TarefaService_1.TarefaService.delete(Number(req.params.id));
        try {
            if (!deltarefa) {
                res.status(404).json({ error: notFound });
            }
            res.json("Tarefa deletada com sucesso!");
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    }
};
