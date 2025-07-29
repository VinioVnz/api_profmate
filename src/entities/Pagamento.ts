import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Aula } from "./Aula";
import { Aluno } from "./Aluno";

@Entity("pagamentos")
export class Pagamento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  valorAula!: number;

  @Column()
  vencimento!: string;

  @Column()
  formaPagamento!: string;

  @Column()
  frequenciaPagamento!: string;
  
  @ManyToOne(() => Aluno, (aluno) => aluno.pagamentos)
  @JoinColumn({ name: "aluno_id" })
  aluno!: Aluno;
}