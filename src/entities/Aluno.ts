import { Entity, PrimaryGeneratedColumn, Column, OneToMany, IsNull } from "typeorm";
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
  email!: string;

  @Column()
  endereco!: string;

  @Column()
  telefone!: string;

  @Column()
  dataNascimento!: string;

  @Column({nullable: true})
  nomeResponsavel!: string;

  @Column({nullable: true})
  cpfResponsavel!: string;

  @OneToMany(() => Aula, aula => aula.aluno)
  aulas!: Aula[];

  @OneToMany(() => Pagamento, (pagamento) => pagamento.aluno)
  pagamentos!: Pagamento[];
}