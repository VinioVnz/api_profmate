import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Tarefa } from "./Tarefa";
import { Aluno } from "./Aluno";
import { Mural } from "./Mural";

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
    telefone!:string;

    @Column()
    cpf!: string;

    @Column({type: 'date'})
    dataNascimento!: Date;

    @OneToMany(() => Tarefa, (tarefa) => tarefa.usuario)
    tarefas!: Tarefa[];

    @OneToMany(() => Aluno, (aluno) => aluno.usuario)
    alunos!: Aluno[];

    @OneToMany(() => Mural, (mural) =>mural.usuario)
    mural!: Mural[];
   

}
