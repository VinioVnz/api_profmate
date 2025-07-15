import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Aluno } from "./Aluno";

@Entity("aulas")
export class Aula {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  data!: string;

  @ManyToOne(() => Aluno, aluno => aluno.aulas, { onDelete: "CASCADE" })
  aluno!: Aluno;
}