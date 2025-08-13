"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmenta1755005189412 = void 0;
const typeorm_1 = require("typeorm");
class CreateEmenta1755005189412 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "ementas",
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
                    name: "descricao",
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
    }
}
exports.CreateEmenta1755005189412 = CreateEmenta1755005189412;
