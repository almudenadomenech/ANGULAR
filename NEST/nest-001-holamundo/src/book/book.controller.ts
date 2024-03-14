import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Book } from './book.model';



@Controller('book')
export class BookController {
    // Crear métodos CRUD con @Get, @Post, @Put, @Delete

    @Get()
    findAll(): Book[] {

    
        //Crear un array de 3 books y devolver con return

     let book1: Book = {
        id: 1,
        title: 'Book1',
        price: 12.50
     }
     let book2: Book = {
        id: 2,
        title: 'Book2',
        price: 13.50
     } 
     let book3: Book = {
        id: 3,
        title: 'Book3',
        price: 14.50
     }  
     return [book1, book2, book3];
    }

    // http://localhost:3000/book/3
    @Get(':id') // :id es una variable, parámetro en la URL
    findById(@Param('id', ParseIntPipe) id: number)  // para que lo convierta a número entero
    {
        console.log(id);
        let bookDemo: Book= {
            id: id,
            title: 'book',
            price: 20.0
        }
        return bookDemo;
    }
    // POST Se usa para crear nuevos libros en base de datos
    // http://loclahost:3000/book enviando un objeto en Body
    @Post()
    Create(@Body() book: Book) {
        // guardar el book en base de datos
        console.log(book);
        return book;
        
    }

    // PUT se usa para actualizar un libro existente en base de datos
    // http://localhost:3000/book/3
    // ParseIntPipe lo convierte de sring a number
    // POST sería para crear un nuevo objeto que no existía antes
    // PUT sería una actualización completa de un objeto
    // PATCH sería una actualización parcial solo de algunos atributos de un objeto de forma varaiable.
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number,
    @Body() book: Book)
    {
        console.log(id);
        console.log(book);
        // buscar y actualizar book en base de datos
        return book;        
    }

    // DELETE se usa para borrar
    @Delete(':id')
    @HttpCode(204) // por defecto devuelve status 204 no content
    deleteById(@Param('id', ParseIntPipe) id: number) 
    {
      console.log(id);
      // Comprobar si existe el libro
      // borrarlo si existe

      // throw new NotFoundException('Libro no encontrado');
      // throw new NotFoundException('No se puede borrar libro porque tiene elementos asociados');
    }
    }
