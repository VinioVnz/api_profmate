import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { authJwt } from "../midleware/authJws";
const routes = Router()

routes.get('/', authJwt, UsuarioController.getAll)
routes.get('/:id', authJwt,UsuarioController.getOn)
routes.put('/:id', authJwt,UsuarioController.update)
routes.delete('/:id', authJwt,UsuarioController.delete)
routes.post('/',UsuarioController.create)

export default routes;