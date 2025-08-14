import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1752535817960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "uid",
                        type: "varchar",
                        isUnique: true
                    },
                    
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"password",
                        type:"varchar"
                    },
                    {
                        name:"telefone",
                        type:"varchar"
                    },
                     {
                        name:"cpf",
                        type:"varchar",
                        isUnique:true
                    },
                     {
                        name:"dataNascimento",
                        type:"datetime",
                    },
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios")
    }
}
