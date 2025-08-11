import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Aluno } from "./Aluno";

@Entity("aulas")
export class Aula {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  data!: string;

  @ManyToOne(() => Aluno, aluno => aluno.aulas, { onDelete: "CASCADE" })
  @JoinColumn({ name: "aluno_id" })
  aluno!: Aluno;
  
}