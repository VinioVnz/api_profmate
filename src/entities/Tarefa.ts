import { Entity, PrimaryGeneratedColumn,Column, Timestamp, ManyToOne, JoinColumn,} from "typeorm";
import { Usuario } from "./Usuario";

@Entity("Tarefa")
export class Tarefa{
    @PrimaryGeneratedColumn()
    id! : number;


    @Column()
    descricao!: string

    @Column()
    data! : Date

    @ManyToOne(()=> Tarefa, (usuario)=> usuario.id,{onDelete: "CASCADE"})
    @JoinColumn({name : "Autor"})
    usuario! : Usuario


}



