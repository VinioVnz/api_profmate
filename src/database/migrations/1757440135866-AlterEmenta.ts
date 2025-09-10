import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AlterEmenta1757440135866 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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
    const table = await queryRunner.getTable("ementas");
    const foreignKey = table!.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("aluno_id") !== -1
    );
    if (foreignKey) {
      await queryRunner.dropForeignKey("ementas", foreignKey);
    }
  }
}
