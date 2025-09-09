import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Aluno } from "./Aluno";

@Entity("ementas")
export class Ementas {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    modulo!: string;

    @Column()
    topico!: string;

    @Column()
    descricao!: string;

    @Column({ default: false })
    concluido!: boolean;

    @ManyToOne(() => Aluno, (aluno) => aluno.ementas)
    @JoinColumn({ name: "aluno_id" })
    aluno!: Aluno;
}