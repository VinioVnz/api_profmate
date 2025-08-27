"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoController = void 0;
const AlunoService_1 = require("../services/AlunoService");
const notFound = "Aluno não encontrada!";
const serverError = "Erro ao realizar a operação!";
exports.AlunoController = {
    async getAll(req, res) {
        try {
            const alunos = await AlunoService_1.AlunoService.getAll();
            res.status(200).json(alunos);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao buscar os alunos!" });
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
            const { usuarioId, ...dadosAluno } = req.body;
            if (!usuarioId) {
                res.status(400).json({ error: "Usuário não informado" });
                return;
            }
            const aluno = await AlunoService_1.AlunoService.create(dadosAluno, usuarioId);
            res.status(201).json(aluno);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao realizar a operação!" });
        }
    },
    async update(req, res) {
        try {
            const { usuarioId, ...dadosAluno } = req.body;
            const idAluno = Number(req.params.id);
            if (!usuarioId) {
                res.status(400).json({ error: "Usuário não informado" });
                return;
            }
            if (!idAluno) {
                res.status(400).json({ error: "ID do aluno não informado" });
                return;
            }
            const alunoAtualizado = await AlunoService_1.AlunoService.update(idAluno, dadosAluno, usuarioId);
            if (!alunoAtualizado) {
                res.status(404).json({ error: "Aluno não encontrado" });
                return;
            }
            res.status(200).json(alunoAtualizado);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar o aluno!" });
        }
    },
    async delete(req, res) {
        try {
            const usuarioId = Number(req.query.usuarioId);
            const idAluno = Number(req.params.id);
            if (!usuarioId) {
                res.status(400).json({ error: "Usuário não informado" });
                return;
            }
            if (!idAluno) {
                res.status(400).json({ error: "ID do aluno não informado" });
                return;
            }
            const deletado = await AlunoService_1.AlunoService.delete(idAluno, usuarioId);
            if (!deletado) {
                res.status(404).json({ error: "Aluno não encontrado" });
                return;
            }
            res.status(200).json({ message: "Aluno deletado com sucesso" });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao deletar o aluno!" });
        }
    }
};
