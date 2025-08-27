import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Usuario } from "./Usuario";

@Entity("mural")
export class Mural {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    recado!: string

    @Column()
    dataHora!: Date

    @ManyToOne(() => Usuario, usuario => usuario.mural, { onDelete: "CASCADE" })
    @JoinColumn({ name: "usuario_id" })
    usuario!: Usuario

}