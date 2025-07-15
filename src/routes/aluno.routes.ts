import { Router } from "express";
import { AlunoController } from "../controllers/AlunoController";

const routes = Router()


routes.get('/', AlunoController.getAll);
routes.get('/:id', AlunoController.getOne);
routes.post('/', AlunoController.create);
routes.put('/:id', AlunoController.update);
routes.delete('/:id', AlunoController.delete);

export default routes;