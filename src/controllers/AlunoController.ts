import { Request, Response } from "express"
import { AlunoService } from "../services/AlunoService"


const notFound = "Aluno não encontrada!"
const serverError = "Erro ao realizar a operação!"

export const AlunoController = {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const alunos = await AlunoService.getAll();
            res.status(200).json(alunos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao buscar os alunos!" });
        }
    },

    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const aluno = await AlunoService.getOne(Number(req.params.id))
            if (!aluno)
                res.status(404).json({ error: notFound })
            res.json(aluno)
        } catch {
            res.status(500).json({ error: serverError })
        }
    },
    async create(req: Request, res: Response): Promise<void> {
        try {
            const { usuarioId, ...dadosAluno } = req.body;

            if (!usuarioId) {
                res.status(400).json({ error: "Usuário não informado" });
                return;
            }

            const aluno = await AlunoService.create(dadosAluno, usuarioId);
            res.status(201).json(aluno);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao realizar a operação!" });
        }
    },

    async update(req: Request, res: Response): Promise<void> {
        try {
            const dadosAluno = req.body; // recebe o JSON direto
            const idAluno = Number(req.params.id);

            if (!idAluno) {
                res.status(400).json({ error: "ID do aluno não informado" });
                return;
            }

            const alunoAtualizado = await AlunoService.update(idAluno, dadosAluno);

            if (!alunoAtualizado) {
                res.status(404).json({ error: "Aluno não encontrado" });
                return;
            }

            res.status(200).json(alunoAtualizado);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar o aluno!" });
        }
    },


    async delete(req: Request, res: Response): Promise<void> {
        try {
            const idAluno = Number(req.params.id);


            if (!idAluno) {
                res.status(400).json({ error: "ID do aluno não informado" });
                return;
            }

            const deletado = await AlunoService.delete(idAluno);

            if (!deletado) {
                res.status(404).json({ error: "Aluno não encontrado" });
                return;
            }

            res.status(200).json({ message: "Aluno deletado com sucesso" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao deletar o aluno!" });
        }
    }

}