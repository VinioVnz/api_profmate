import { Router } from "express";
import { MuralController } from "../controllers/MuralController";

const routes = Router()


routes.get('/', MuralController.getAll);
routes.get('/:id', MuralController.getOne);
routes.post('/', MuralController.create);
routes.put('/:id', MuralController.update);
routes.delete('/:id', MuralController.delete);

export default routes;