import { Book } from "src/book/book.model";
import { User } from "src/user/user.model";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'date'})
    startDate: Date;

    @Column({type: 'date'})
    endDate: Date;

    @Column({type: 'decimal', precision: 14, scale: 2})
    price: number;

    @ManyToOne(() => User, {eager: true})
    user: User;

    @ManyToOne(() => Book, {eager: true})
    book: Book;
}