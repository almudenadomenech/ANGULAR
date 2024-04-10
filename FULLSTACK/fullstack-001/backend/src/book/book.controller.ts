import { Body, Request, ConflictException, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, UseGuards, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.model';
import { Between, Repository, UpdateDateColumn } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/user/role.enum';

@Controller('book')
export class BookController {

    // Crear constructor e inyectar Repository<Book> para acceso a base de datos
    constructor(
        @InjectRepository(Book) private bookRepository: Repository<Book>
    ) {}
    
    // findAll y utilizar this.bookRepository.find()
    @Get()
    @UseGuards(AuthGuard('jwt')) // Oblligatorio tener token JWT para acceder a este método
    findAll(@Request() request) {

        // al ser un método SECURIZADO tenemos acceso al user por lo que podemos usarlo para:
        // Comprobar el rol del usuario
        // Filtrar datos por usuario
        console.log(request.user);
        
        return this.bookRepository.find();
    }

    @Get(':id') // :id es una variable, parámetro en la url
    @UseGuards(AuthGuard('jwt'))
    findById( @Param('id', ParseIntPipe) id: number ) {
        return this.bookRepository.findOne({
            // relations: {
            //    author: true
            // },
            where: {
                id: id
            }
        });
    }

    // Sirve para la pantalla de author-detail para mostrar los libros del autor
    // Filtrar libros por autor
    @Get('filter-by-author/:id')
    findByAuthorId(@Param('id', ParseIntPipe) id:number) {
        return this.bookRepository.find({
            where: {
                author: {
                    id: id
                }
            }
        });
    }

    // filtrar por editorial
    @Get('filter-by-editorial/:id')
    findByEditorialId(@Param('id', ParseIntPipe) id:number) {
        return this.bookRepository.find({
            where: {
                editorial: {
                    id: id
                }
            }
        });
    }

    // Filtrar por categoría
    @Get('filter-by-category-id/:id')
    findByCategoryId(@Param('id', ParseIntPipe) id:number) {
        return this.bookRepository.find({
            where: {
                categories: {
                    id: id
                }
            }
        });
    }


    @Get('filter-by-title/:title')
    findByTitle(@Param('title') title: string) {
        return this.bookRepository.find({
            where: {
                title: title // coincidencia exacta, los títulos deben ser iguales
            }
        });
    }

    @Get('published/true')
    findByPublishedTrue() {
        return this.bookRepository.find({
            where: {
                published: true
            }
        });
    }

    @Get('filter-by-price/:min/:max')
    findByPriceBetweenMinAndMax(
        @Param('min', ParseIntPipe) min: number,
        @Param('max', ParseIntPipe) max: number
    ) {
        return this.bookRepository.find({
            where: {
                price: Between(min, max)
            }
        });
    }

    @Post() // para que solo el admin pueda guardar
    @UseGuards(AuthGuard('jwt'))
    create(@Request() request, @Body() book: Book) {

        if(request.user.role !== Role.ADMIN)
            throw new UnauthorizedException('sin permisos para crear');

        // Obligatorio ser admin para poder guardar
        return this.bookRepository.save(book);
    }

    // async viene de asíncrono, para poder ejecutar await
    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() book: Book
        ) {
            
            // await espera a que el método existsBy termine ya que devuelve Promise<boolean>
            const exists = await this.bookRepository.existsBy({
               id: id
            });

            if(!exists) {
                throw new NotFoundException('Book not found');
            }

            return this.bookRepository.save(book);

    }

    // Delete
    @Delete(':id')
    async deleteById(
        @Param('id', ParseIntPipe) id: number
    ) {

        const exists = await this.bookRepository.existsBy({
            id: id
         });

         if(!exists) {
             throw new NotFoundException('Book not found');
         }

        try {
            // Opción 1: Borrar el libro
            // Primero desasociar o borrar aquellas cosas que apunten al libro
            // this.bookRepository.delete(id);

            // Opción 2: Despublicar libro
            const book = await this.bookRepository.findOne({
                where: {id: id}
            });
            book.published = false;
            await this.bookRepository.save(book);
            
        } catch (error) {
            console.log("Error al borrar el libro");
            throw new ConflictException('No se puede borrar.');
        }
        
    }


}
