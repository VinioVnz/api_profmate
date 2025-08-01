import e, { Request, Response } from "express"
import { TarefaService } from "../services/TarefaService";

const notFound = "Tarefa não encontrada";
const serverError = "Erro ao realizar operação";

export const TarefaController = {
    async getAll(req: Request, res: Response): Promise<void> {

        try {
            const tarefa = await TarefaService.getAll();
            res.json(tarefa)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: serverError })
        }

    },

    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const tarefa = await TarefaService.getOne(Number(req.params.id))
            if (tarefa!) {
                res.status(404).json({ error: notFound })
                res.json(tarefa)
            }
        } catch (error) {
            res.status(500).json({ eror: serverError })
        }
    },

    async create(req: Request, res: Response): Promise<void> {
        try {
            const tarefa = await TarefaService.create(req.body);
            if (tarefa!) {
                res.status(404).json({ error: notFound })
                res.status(201).json(tarefa);
            }

        } catch {
            res.status(500).json({ error: serverError })
        }
    },

    async update(req: Request, res: Response): Promise<void> {
        try {
            const updateData = await TarefaService.update(Number(req.params.id), req.body)
            if (updateData!) {
                if (!updateData) {
                    res.status(404).json({ error: notFound })
                }
                res.json('Tarefa editada com sucesso')
            }
        } catch {
            res.status(500).json({ error: serverError })
        }
    },

    async delete(req: Request, res: Response): Promise<void> {
        const deltarefa = await TarefaService.delete(Number(req.params.id))
        try {
            if (deltarefa!) {
                res.status(404).json({ error: notFound })
                res.json("Tarefa deletada com sucesso!")
            }
        } catch {
            res.status(500).json({ error: serverError })
        }
    }

}