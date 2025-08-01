import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Tarefa } from "./Tarefa";

@Entity("usuarios")
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @OneToMany(() => Tarefa, (tarefa) => tarefa.usuario)
    tarefas!: Tarefa[];
}
