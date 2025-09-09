import { Entity, PrimaryGeneratedColumn, Column, OneToMany, IsNull, ManyToOne, JoinColumn } from "typeorm";
import { Aula } from "./Aula";
import { Pagamento } from "./Pagamento";
import { Usuario } from "./Usuario";
import { Ementas } from "./Ementas";
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

  @Column({ nullable: true })
  nomeResponsavel!: string;

  @Column({ nullable: true })
  cpfResponsavel!: string;

  @OneToMany(() => Aula, aula => aula.aluno)
  aulas!: Aula[];

  @OneToMany(() => Pagamento, (pagamento) => pagamento.aluno)
  pagamentos!: Pagamento[];
  @OneToMany(() => Ementas, (ementa) => ementa.aluno)
  ementas!: Ementas[];
  
  @ManyToOne(() => Usuario, (usuario) => usuario.alunos)
  @JoinColumn({ name: "usuario_id" })
  usuario!: Usuario;
  @Column({ name: "usuario_id" })
  usuarioId!: number;
}