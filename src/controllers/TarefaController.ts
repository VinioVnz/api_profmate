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
            const tarefa = await TarefaService.getOne(Number(req.params.id));
            if (!tarefa) {
                 res.status(404).json({ error: notFound });
            }
            res.json(tarefa);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: serverError });
        }
    },

    async create(req: Request, res: Response): Promise<void> {
        try {
            const tarefa = await TarefaService.create(req.body);
            if (!tarefa) {
                res.status(400).json({ error: "Usuário inválido ou dados incompletos" });
            }
            res.status(201).json(tarefa);
        } catch (e) {
            console.log("ERRO: ", e);
            res.status(500).json({ error: serverError });
        }
    },

    async update(req: Request, res: Response): Promise<void> {
        try {
            const updateData = await TarefaService.update(Number(req.params.id), req.body);
            if (!updateData) {
                res.status(404).json({ error: notFound });
            }
            res.json(updateData); // retorna a tarefa atualizada
        } catch (e) {
            console.log(e);
            res.status(500).json({ error: serverError });
        }
    },

    async delete(req: Request, res: Response): Promise<void> {
        const deltarefa = await TarefaService.delete(Number(req.params.id))
        try {
            if (!deltarefa) {
                res.status(404).json({ error: notFound })
            }
            res.json("Tarefa deletada com sucesso!")
        } catch {
            res.status(500).json({ error: serverError })
        }
    }

}