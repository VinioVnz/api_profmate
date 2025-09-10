import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AlterEmenta1757440135866 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Adiciona a coluna aluno_id
    await queryRunner.addColumn(
      "ementas",
      new TableColumn({
        name: "aluno_id",
        type: "int",
        isNullable: false,
      })
    );

    // Cria a foreign key para alunos(id)
    await queryRunner.createForeignKey(
      "ementas",
      new TableForeignKey({
        columnNames: ["aluno_id"],
        referencedTableName: "alunos",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove a FK
    const table = await queryRunner.getTable("ementas");
    const foreignKey = table!.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("aluno_id") !== -1
    );
    if (foreignKey) {
      await queryRunner.dropForeignKey("ementas", foreignKey);
    }

    // Remove a coluna
    await queryRunner.dropColumn("ementas", "aluno_id");
  }
}
