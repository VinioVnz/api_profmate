import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTarefa1754057720229 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
                    name: "concluida",
                    type: "boolean"
                },
                {
                    name: "usuario_id",
                    type: "int",
                },
            ],
        }));

        await queryRunner.createForeignKey("tarefas", new TableForeignKey({
            columnNames: ["usuario_id"],
            referencedTableName: "usuarios",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tarefas");
    }
}
