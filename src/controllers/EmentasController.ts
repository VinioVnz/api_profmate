

const notFound = "Ementas não encontrado!";
const serverError = "Erro ao realizar a operação!";
import { Request, Response } from "express";
import { EmentasService } from "../services/EmentasService";
import { log } from "console";

export const EmentasController = {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const ementas = await EmentasService.getAll();
            res.json(ementas);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: serverError });
        }
    },

    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const ementas = await EmentasService.getOne(Number(req.params.id));
            if (!ementas) res.status(404).json({ error: notFound });
            res.json(ementas);
        } catch {
            res.status(500).json({ error: serverError });
        }
    },

   async create(req: Request, res: Response): Promise<void> {
  try {
    const ementa = await EmentasService.create(req.body);

    if (!ementa) {
      res.status(400).json({ error: "Erro ao criar a ementa" });
    }

    res.status(201).json(ementa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: serverError });
  }
},




    async update(req: Request, res: Response): Promise<void> {
        try {
            const updateData = await EmentasService.update(Number(req.params.id), req.body);
            if (!updateData) res.status(404).json({ error: notFound });
            res.json('Progresso editado com sucesso');
        } catch {
            res.status(500).json({ error: serverError });
        }
    },

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const delProgresso = await EmentasService.delete(Number(req.params.id));
            if (!delProgresso) res.status(404).json({ error: notFound });
            res.json("Progresso deletado com sucesso!");
        } catch {
            res.status(500).json({ error: serverError });
        }
    }
};