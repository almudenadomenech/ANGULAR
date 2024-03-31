import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    title: string;

    @Column({length: 1000})
    description: string;

    // https://placehold.co/600x400
    @Column()
    photo: string;


    
}