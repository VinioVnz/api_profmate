"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const UsuarioService_1 = require("../services/UsuarioService");
const notFound = 'Recurso não encontrado';
const serverError = "Erro ao realizar a operação";
exports.UsuarioController = {
    async getAll(req, res) {
        try {
            const user = await UsuarioService_1.UsuarioService.getAll();
            res.json(user);
        }
        catch (error) {
            res.status(500).json({ error: serverError, desc: error });
        }
    },
    async getOn(req, res) {
        try {
            const user = await UsuarioService_1.UsuarioService.getOne(Number(req.params.id));
            console.log(user);
            if (!user)
                res.status(404).json({ error: notFound });
            res.json(user);
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async create(req, res) {
        try {
            const user = await UsuarioService_1.UsuarioService.create(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(500).json({ error: serverError, desc: error });
        }
    },
    async update(req, res) {
        try {
            const updateData = await UsuarioService_1.UsuarioService.update(Number(req.params.id), req.body);
            if (!updateData)
                res.status(404).json({ error: notFound });
            res.json("Recurso editado com sucesso");
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
    async delete(req, res) {
        try {
            const delUser = await UsuarioService_1.UsuarioService.delete(Number(req.params.id));
            if (!delUser)
                res.status(404).json({ error: notFound });
            res.json('Recurso deletado com sucesso');
        }
        catch {
            res.status(500).json({ error: serverError });
        }
    },
};
