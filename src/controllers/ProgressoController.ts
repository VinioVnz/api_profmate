

const notFound = "Progresso não encontrado!";
const serverError = "Erro ao realizar a operação!";
import { Request, Response } from "express";
import { ProgressoService } from "../services/ProgressoService";

export const ProgressoController = {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const progresso = await ProgressoService.getAll();
            res.json(progresso);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: serverError });
        }
    },

    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const progresso = await ProgressoService.getOne(Number(req.params.id));
            if (!progresso) res.status(404).json({ error: notFound });
            res.json(progresso);
        } catch {
            res.status(500).json({ error: serverError });
        }
    },

    async create(req: Request, res: Response): Promise<void> {
        try {
            const progresso = await ProgressoService.create(req.body);
            if (!progresso) res.status(404).json({ error: notFound });
            res.status(201).json(progresso);
        } catch {
            res.status(500).json({ error: serverError });
        }
    },

    async update(req: Request, res: Response): Promise<void> {
        try {
            const updateData = await ProgressoService.update(Number(req.params.id), req.body);
            if (!updateData) res.status(404).json({ error: notFound });
            res.json('Progresso editado com sucesso');
        } catch {
            res.status(500).json({ error: serverError });
        }
    },

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const delProgresso = await ProgressoService.delete(Number(req.params.id));
            if (!delProgresso) res.status(404).json({ error: notFound });
            res.json("Progresso deletado com sucesso!");
        } catch {
            res.status(500).json({ error: serverError });
        }
    }
};