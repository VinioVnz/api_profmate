"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1752535817960 = void 0;
const typeorm_1 = require("typeorm");
class CreateUser1752535817960 {
    async up(queryRunner) {
        queryRunner.createTable(new typeorm_1.Table({
            name: "usuarios",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "uid",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "nome",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name: "telefone",
                    type: "varchar"
                },
                {
                    name: "cpf",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "dataNascimento",
                    type: "datetime",
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("usuarios");
    }
}
exports.CreateUser1752535817960 = CreateUser1752535817960;
