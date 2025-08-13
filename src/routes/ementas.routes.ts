import { Router } from "express";
const routes = Router();
import { EmentasController } from "../controllers/EmentasController";

routes.get('/', EmentasController.getAll);
routes.post('/', EmentasController.create);  
routes.get('/:id', EmentasController.getOne);
routes.put('/:id', EmentasController.update);
routes.delete('/:id', EmentasController.delete); 

export default routes;