import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Tarefa } from "./Tarefa";

@Entity("usuarios")
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    uid!: string;

    @Column()
    nome!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    cpf!: string;

    @Column({type: 'date'})
    dataNascimento!: Date;

    @OneToMany(() => Tarefa, (tarefa) => tarefa.usuario)
    tarefas!: Tarefa[];
}
