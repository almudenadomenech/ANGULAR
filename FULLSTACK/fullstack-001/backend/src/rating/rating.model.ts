import { Book } from "src/book/book.model";
import { User } from "src/user/user.model";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

/*
 * Representa una valoración con comentario sobre un Book realizara por un User
 */
@Entity()
export class Rating {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;

    @Column({length: 2000, nullable: true})
    comment: string;

    @CreateDateColumn()
    createdDate: Date;

    @ManyToOne(() => User, {eager: true})
    user: User;

    @ManyToOne(() => Book, {eager: true})
    book: Book;

}