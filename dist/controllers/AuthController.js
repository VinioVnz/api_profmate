"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AuthService_1 = require("../services/AuthService");
exports.AuthController = {
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const auth = await AuthService_1.AuthService.auth(email, password);
            if (!auth)
                res.status(401).json({ erro: 'Dados de login incorretos' });
            res.json(auth);
        }
        catch (error) {
            res.status(401).json({ erro: error.message });
        }
    }
};
