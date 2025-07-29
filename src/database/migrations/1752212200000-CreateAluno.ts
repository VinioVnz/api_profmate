import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAluno1752212200000 implements MigrationInterface {
public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "alunos",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },

          {
            name: "nome",
            type: "varchar",
          },
          
          {
            name: "cpf",
            type: "varchar",
            isUnique: true
          },

           {
            name: "email",
            type: "varchar"
          },
          
          {
            name: "endereco",
            type: "varchar",
          },

          {
            name: "telefone",
            type: "varchar",
          },
          
          {
            name: "dataNascimento",
            type: "varchar",
          },

          {
            name: "nomeResponsavel",
            type: "varchar",
            isNullable: true
          },

          {
            name: "cpfResponsavel",
            type: "varchar",
            isUnique: true,
            isNullable: true
          },


        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("alunos");
  }

}
