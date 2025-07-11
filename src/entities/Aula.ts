import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('aulas')
export class Aula{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    data!: string;

    @Column()
    nomeAluno!: string
}