import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ementas")
export class Ementa {
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

}