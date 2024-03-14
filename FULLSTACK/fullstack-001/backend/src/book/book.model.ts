import { Category } from "src/category/category.model";
import { Author } from "src/author/author.model";
import { Editorial } from "src/editorial/editorial.model";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Book {

    @ApiProperty() // para testear en API
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    title: string;

    @ApiProperty()
    @Column({unique: true, length: 13})
    isbn: string;

    @ApiProperty()
    @Column({name: 'pages', type: 'int', unsigned: true, default: 0})
    numPages: number;

    @ApiProperty()
    @CreateDateColumn()
    createdDate: Date;

    @ApiProperty()
    @UpdateDateColumn()
    updateDate: Date;

    @ApiProperty()
    @Column({type: 'boolean', default: false}) // En MySQL aparecerá como 0 o 1
    published: boolean;

    @ApiProperty()
    @Column({type: 'decimal', precision: 14, scale: 2})
    price: number;

    // asosciaciones: ManyToOne, Many to Many
   // @ManyToOne(() => Author)
    
    // eager true: hace que traiga la asociación en las consultas. DESACONSEJADO en aplicaciones grandes.
    // eager false: hace que no taiga la aplicación, RECOMENDADO en aplicaciones grandes para optimizar consultas.
    @ApiProperty({example: {id: 1}})
    @ManyToOne(() => Author, {eager: true})
    author: Author ;

    @ApiProperty({example: {id: 1}})
    @ManyToOne(() => Editorial, {eager: true})
    @JoinColumn({name: 'id_editorial'}) // opcional, cambia el nombre de la columna en la base de datos
    editorial: Editorial;


    // Asociacion Many To Many
    @ApiProperty({example: [{id: 2}]}) // para testear u ejemplo de array en API
    @ManyToMany(() => Category, {eager: true})
    @JoinTable()
    categories: Category[];// varias categorias


}