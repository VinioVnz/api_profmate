import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePagamento1752488966411 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
      })
    );

    // foreign key
    await queryRunner.createForeignKey(
      "pagamentos",
      new TableForeignKey({
        columnNames: ["aluno_id"],
        referencedTableName: "alunos",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pagamentos");
  }
}
