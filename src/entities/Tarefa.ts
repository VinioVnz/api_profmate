import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity("tarefas")
export class Tarefa {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @Column()
  descricao!: string;

  @Column()
  dataEntrega!: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.tarefas)
  @JoinColumn({ name: "usuario_id" })
  usuario!: Usuario;
}
