import { Router } from "express";
import { PagamentoController } from "../controllers/PagamentoController";

const routes = Router();

routes.get('/',PagamentoController.getAll);
routes.post('/',PagamentoController.create);
routes.get('/:id',PagamentoController.getOne);
routes.put('/:id',PagamentoController.update);
routes.delete('/:id',PagamentoController.delete);

export default routes;