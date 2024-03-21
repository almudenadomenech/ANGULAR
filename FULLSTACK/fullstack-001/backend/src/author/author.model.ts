import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({type: 'date'}) // sin hora ni minuto
    birthDay: Date;

    @Column()
    salary: number;

    @Column()
    photoUrl: string;

    @Column()
    country: string;

    @Column({length: 3000})
    bio: string;

    @Column()
    wikipediaUrl: string;
    



}