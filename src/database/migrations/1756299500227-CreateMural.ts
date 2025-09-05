import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateMural1756299500227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
                    new Table({
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
                                isNullable:false
                            }
                        ]
                    })
                )
                await queryRunner.createForeignKey(
                    "mural",
                    new TableForeignKey({
                        columnNames: ["usuario_id"],
                        referencedTableName: "usuarios",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE", // remove aulas se aluno for deletado
                    })
                );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("mural");
    }

}
