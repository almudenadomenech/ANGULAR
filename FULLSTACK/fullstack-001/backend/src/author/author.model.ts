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

    



}