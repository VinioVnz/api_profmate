import { Router } from "express";
import { TarefaController } from "../controllers/TarefaController";

const routes = Router()


routes.get('/', TarefaController.getAll);
routes.get('/:id', TarefaController.getOne);
routes.post('/', TarefaController.create);
routes.put('/:id', TarefaController.update);
routes.delete('/:id', TarefaController.delete);

export default routes;