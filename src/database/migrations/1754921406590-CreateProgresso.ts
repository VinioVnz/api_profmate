import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProgresso1754921406590 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Progresso");
    }

}
