import { Request, Response } from "express"
import { PagamentoService } from "../services/PagamentoService"

const notFound = "Pagamento não encontrado!"
const serverError = "Erro ao realizar a operação!"

export const PagamentoController = {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const pagamento = await PagamentoService.getAll()
            res.json(pagamento)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: serverError })
        }
    },

    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const pagamento = await PagamentoService.getOne(Number(req.params.id))
            if (!pagamento)
                res.status(404).json({ error: notFound })
            res.json(pagamento)
        } catch {
            res.status(500).json({ error: serverError })
        }
    },

    async create(req: Request, res: Response): Promise<void> {
    try {
      const pagamento = await PagamentoService.create(req.body);
      if (!pagamento) res.status(404).json({ error: notFound});
      res.status(201).json(pagamento);
    } catch {
      res.status(500).json({ error: serverError });
    }
  },
    async update(req: Request, res: Response): Promise<void> {
        try {
            const updateData = await PagamentoService.update(Number(req.params.id), req.body)
            if (!updateData) res.status(404).json({ error: notFound })
            res.json('Pagamento editado com sucesso')
        } catch {
            res.status(500).json({ error: serverError })
        }
    },

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const delPagamento = await PagamentoService.delete(Number(req.params.id))
            if (!delPagamento) res.status(404).json({ error: notFound })
            res.json("Pagamento deletado com sucesso!")
        } catch {
            res.status(500).json({ error: serverError })
        }
    }
}