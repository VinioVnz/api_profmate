import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Aula } from "./Aula";

@Entity("alunos")
export class Aluno {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @OneToMany(() => Aula, aula => aula.aluno)
  aulas!: Aula[];
}