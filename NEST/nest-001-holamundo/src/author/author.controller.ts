import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Author } from './author.model';

// http://localhost:3000/author

@Controller('author')
export class AuthorController {

    // findAll
    @Get()
    findAll(): Author[] {
        
        let author1: Author = {id: 1, name: 'a1', city: 'C1'};
        let author2: Author = {id: 2, name: 'a2', city: 'C2'};
        let author3: Author = {id: 3, name: 'a3', city: 'C3'};

     return [author1, author2, author3] ;  
    }

    // finById- http://localhost:3000/author/6
    @Get(':id')
    findByInt(@Param('id', ParseIntPipe) id: number) {
        console.log(id);
        let author1: Author = {id: 1, name: 'a1', city: 'C1'};
        return author1;
    }

    @Post()
    create(@Body() author: Author) {
        //guarda el autor en la base de datos
        console.log(author);
        return author;
        
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number,
    @Body() author: Author)
    {
        console.log(id);
        console.log(author);

        return author;
    }

    @Delete(':id')
    @HttpCode(204)
    deleteById(@Param('id', ParseIntPipe) id: number)
    {
        console.log(id);
    }
}
