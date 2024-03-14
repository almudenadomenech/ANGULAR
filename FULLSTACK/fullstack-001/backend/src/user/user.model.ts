import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.enum";


@Entity()
export class User{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    role: Role;
    

}