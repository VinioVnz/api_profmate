"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMural1756299500227 = void 0;
const typeorm_1 = require("typeorm");
class CreateMural1756299500227 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "mural",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "recado",
                    type: "varchar"
                },
                {
                    name: "dataHora",
                    type: "Date"
                },
                {
                    name: "usuario_id",
                    type: "int",
                    isNullable: false
                }
            ]
        }));
        await queryRunner.createForeignKey("murais", new typeorm_1.TableForeignKey({
            columnNames: ["usuario_id"],
            referencedTableName: "usuarios",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE", // remove aulas se aluno for deletado
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("murais");
    }
}
exports.CreateMural1756299500227 = CreateMural1756299500227;
