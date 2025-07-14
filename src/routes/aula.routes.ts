import { Router } from "express";
import { AulaController } from "../controllers/AulaController";

const routes = Router()


routes.get('/', AulaController.getAll);
routes.get('/:id', AulaController.getOne);
routes.post('/', AulaController.create);
routes.put('/:id', AulaController.update);
routes.delete('/:id', AulaController.delete);

export default routes;