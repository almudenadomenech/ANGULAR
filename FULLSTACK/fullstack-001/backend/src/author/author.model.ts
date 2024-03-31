import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true}) // nullable true hace que el campo sea opcional
    firstName: string;

    @Column({nullable: true})
    lastName: string;

    @Column({type: 'date', nullable: true}) // sin hora minuto
    birthDate: Date;

    @Column({nullable: true})
    salary: number;

    @Column({nullable: true})
    photoUrl: string;

    @Column({nullable: true})
    country: string;

    @Column({length: 3000, nullable: true})
    bio: string;

    @Column({nullable: true})
    wikipediaUrl: string;
}