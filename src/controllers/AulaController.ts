import { Request, Response } from "express"
import { AulaService } from "../services/AulaService"
import { AppDataSource } from "../database/data-source"
import { Aula } from "../entities/Aula"
import { Aluno } from "../entities/Aluno"

const notFound = "Aula não encontrada!"
const serverError = "Erro ao realizar a operação!"

export const AulaController = {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const aula = await AulaService.getAll()
            res.json(aula)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: serverError })
        }
    },

    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const aula = await AulaService.getOne(Number(req.params.id))
            if (!aula)
                res.status(404).json({ error: notFound })
            res.json(aula)
        } catch {
            res.status(500).json({ error: serverError })
        }
    },

    async create(req: Request, res: Response): Promise<void> {
    try {
    console.log(req.body)
      const aula = await AulaService.create(req.body);
      if (!aula) res.status(404).json({ error: "Aluno não encontrado" });
      res.status(201).json(aula);
    } catch {
      res.status(500).json({ error: serverError });
    }
  },
    async update(req: Request, res: Response): Promise<void> {
        try {
            const updateData = await AulaService.update(Number(req.params.id), req.body)
            if (!updateData) res.status(404).json({ error: notFound })
            res.json('Aula editada com sucesso')
        } catch {
            res.status(500).json({ error: serverError })
        }
    },

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const delAula = await AulaService.delete(Number(req.params.id))
            if (!delAula) res.status(404).json({ error: notFound })
            res.json("Aula deletada com sucesso!")
        } catch {
            res.status(500).json({ error: serverError })
        }
    }
}