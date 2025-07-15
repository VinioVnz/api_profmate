import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateAula1752274381428 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
                        name: "aluno_id",
                        type: "int"
                    }
                ]
            })
        );
        //aqui é pra criar a fk da tabela
        await queryRunner.createForeignKey(
            "aulas",
            new TableForeignKey({
                columnNames: ["aluno_id"],
                referencedTableName: "alunos",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE", // remove aulas se aluno for deletado
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("aulas");
    }

}
