"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authJwt = authJwt;
const jwt = require('jsonwebtoken');
async function authJwt(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Baerer ")) {
        res.status(401).json({ erro: "Token invalido ou inexistente" });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    }
    catch (error) {
        res.status(401).json({ erro: "Token inválido" });
    }
}
