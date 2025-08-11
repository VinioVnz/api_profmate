import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Progresso")
export class Progresso {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    modulo!: string;
    
    @Column()
    topico!: string;
    
    @Column({ default: false })
    concluido!: boolean;

}