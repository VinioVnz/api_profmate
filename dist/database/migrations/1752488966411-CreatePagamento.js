"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagamento1752488966411 = void 0;
const typeorm_1 = require("typeorm");
class CreatePagamento1752488966411 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "pagamentos",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "valorAula",
                    type: "decimal",
                    precision: 10,
                    scale: 2,
                },
                {
                    name: "vencimento",
                    type: "varchar",
                },
                {
                    name: "formaPagamento",
                    type: "varchar",
                },
                {
                    name: "frequenciaPagamento",
                    type: "varchar",
                },
                {
                    name: "aluno_id",
                    type: "int",
                },
            ],
        }));
        // foreign key
        await queryRunner.createForeignKey("pagamentos", new typeorm_1.TableForeignKey({
            columnNames: ["aluno_id"],
            referencedTableName: "alunos",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("pagamentos");
    }
}
exports.CreatePagamento1752488966411 = CreatePagamento1752488966411;
