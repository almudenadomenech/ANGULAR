import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Editorial {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // nullable: campo obligatorio
    @Column({nullable: false, unique: true})
    cif: string;

    @Column()
    year: number;

}