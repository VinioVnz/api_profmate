"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoController = void 0;
const AlunoService_1 = require("../services/AlunoService");
const notFound = "Aluno não encontrada!";
const serverError = "Erro ao realizar a operação!";
exports.AlunoController = {
    async getAll(req, res) {
        try {
            // pega o UID do Firebase do usuário logado
            const uid = req.headers.authorization?.replace("Bearer ", "");
            const alunos = await AlunoService_1.AlunoService.getAll(uid);
            res.json(alunos);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao realizar a operação!" });
        }
    },
    async getOne(req, res) {
        try {
            const aluno = await AlunoService_1.AlunoService.getOne(Number(req.params.id));
            if (!aluno)
                res.status(404).json({ error: notFound });
            res.json(aluno);
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async create(req, res) {
        try {
            // Pega o UID do header Authorization
            const uid = req.headers.authorization?.replace("Bearer ", "");
            if (!uid) {
                res.status(401).json({ error: "Usuário não logado" });
                return;
            }
            // Cria o aluno passando os dados do body + UID do usuário
            const aluno = await AlunoService_1.AlunoService.create(req.body, uid);
            res.status(201).json(aluno);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao realizar a operação!" });
        }
    },
    async update(req, res) {
        try {
            const updateData = await AlunoService_1.AlunoService.update(Number(req.params.id), req.body);
            if (!updateData)
                res.status(404).json({ error: notFound });
            res.json('Aluno editado com sucesso');
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async delete(req, res) {
        try {
            const delAluno = await AlunoService_1.AlunoService.delete(Number(req.params.id));
            if (!delAluno)
                res.status(404).json({ error: notFound });
            res.json("Aluno deletado com sucesso!");
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    }
};
