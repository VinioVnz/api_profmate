"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAula1752274381428 = void 0;
const typeorm_1 = require("typeorm");
class CreateAula1752274381428 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "aulas",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "data",
                    type: "varchar"
                },
                {
                    name: "nomeAluno",
                    type: "varchar"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("aulas");
    }
}
exports.CreateAula1752274381428 = CreateAula1752274381428;
