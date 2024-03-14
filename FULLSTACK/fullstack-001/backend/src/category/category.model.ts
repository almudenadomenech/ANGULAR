import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    title: string;

    @Column({length: 1000}) // máximo de caracteres por defecto 255
    description: string;

    @Column()
    photo: string;
}