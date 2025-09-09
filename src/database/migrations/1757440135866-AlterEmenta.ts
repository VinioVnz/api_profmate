import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class AlterEmenta1757440135866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
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
            await queryRunner.createForeignKey("ementas", new TableForeignKey({
                        columnNames: ["aluno_id"],
                        referencedTableName: "alunos",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    }));
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
