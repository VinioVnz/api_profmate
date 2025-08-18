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
                    name: "horario",
                    type: "varchar"
                },
                {
                    name: "aluno_id",
                    type: "int"
                }
            ]
        }));
        //aqui é pra criar a fk da tabela
        await queryRunner.createForeignKey("aulas", new typeorm_1.TableForeignKey({
            columnNames: ["aluno_id"],
            referencedTableName: "alunos",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE", // remove aulas se aluno for deletado
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("aulas");
    }
}
exports.CreateAula1752274381428 = CreateAula1752274381428;
