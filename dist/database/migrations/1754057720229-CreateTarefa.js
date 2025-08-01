"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTarefa1754057720229 = void 0;
const typeorm_1 = require("typeorm");
class CreateTarefa1754057720229 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "tarefas",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "titulo",
                    type: "varchar",
                },
                {
                    name: "descricao",
                    type: "varchar",
                },
                {
                    name: "dataEntrega",
                    type: "datetime",
                },
                {
                    name: "usuario_id",
                    type: "int",
                },
            ],
        }));
        await queryRunner.createForeignKey("tarefas", new typeorm_1.TableForeignKey({
            columnNames: ["usuario_id"],
            referencedTableName: "usuarios",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("tarefas");
    }
}
exports.CreateTarefa1754057720229 = CreateTarefa1754057720229;
