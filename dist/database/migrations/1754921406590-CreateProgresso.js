"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProgresso1754921406590 = void 0;
const typeorm_1 = require("typeorm");
class CreateProgresso1754921406590 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "Progresso",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "modulo",
                    type: "varchar",
                },
                {
                    name: "topico",
                    type: "varchar",
                },
                {
                    name: "concluido",
                    type: "boolean",
                    default: false,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("Progresso");
    }
}
exports.CreateProgresso1754921406590 = CreateProgresso1754921406590;
