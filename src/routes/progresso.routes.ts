import { Router } from "express";
const routes = Router();
import { ProgressoController } from "../controllers/ProgressoController";

routes.get('/', ProgressoController.getAll);
routes.post('/', ProgressoController.create);  
routes.get('/:id', ProgressoController.getOne);
routes.put('/:id', ProgressoController.update);
routes.delete('/:id', ProgressoController.delete); 

export default routes;