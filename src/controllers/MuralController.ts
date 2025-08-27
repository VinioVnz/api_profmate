import { MuralService } from "../services/MuralService"
import { Request, Response } from "express"


const notFound = "Mural não encontrado!"
const serverError = "Erro ao realizar a operação!"

export const MuralController = {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const mural = await MuralService.getAll()
            res.json(mural)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: serverError })
        }
    },

    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const mural = await MuralService.getOne(Number(req.params.id));
            if (!mural) {
                res.status(404).json({ error: notFound }); // <-- ok!
            }

            res.json(mural); // <-- só chega aqui se o mural existir
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: serverError });
        }
    },

    async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body)
            const mural = await MuralService.create(req.body);
            if (!mural) {
                res.status(404).json({ error: "Usuario não encontrado" })
            };
            res.status(201).json(mural);
        } catch {
            res.status(500).json({ error: serverError });
        }
    },
    async update(req: Request, res: Response): Promise<void> {
        try {
            const updateData = await MuralService.update(Number(req.params.id), req.body)
            if (!updateData) res.status(404).json({ error: notFound })
            res.json('Mural editado com sucesso')
        } catch {
            res.status(500).json({ error: serverError })
        }
    },

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const delMural = await MuralService.delete(Number(req.params.id))
            if (!delMural) res.status(404).json({ error: notFound })
            res.json("Mural deletado com sucesso!")
        } catch {
            res.status(500).json({ error: serverError })
        }
    }


}