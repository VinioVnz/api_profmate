"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAluno1752612199704 = void 0;
const typeorm_1 = require("typeorm");
class CreateAluno1752612199704 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "alunos",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "nome",
                    type: "varchar",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("alunos");
    }
}
exports.CreateAluno1752612199704 = CreateAluno1752612199704;
