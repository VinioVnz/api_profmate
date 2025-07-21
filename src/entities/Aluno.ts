import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Aula } from "./Aula";
import { Pagamento } from "./Pagamento";
@Entity("alunos")
export class Aluno {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  cpf!: string;

  @Column()
  endereco!: string;

  @Column()
  telefone!: string;

  @Column()
  dataNascimento!: string;

  @OneToMany(() => Aula, aula => aula.aluno)
  aulas!: Aula[];

  @OneToMany(() => Pagamento, (pagamento) => pagamento.aluno)
  pagamentos!: Pagamento[];
}