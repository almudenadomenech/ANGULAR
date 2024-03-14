import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Category } from './category.model';

@Controller('category')
export class CategoryController {

    // findAll
    @Get()
    findAll(): Category[]{
        return [
            {id: 1, name: 'category1', description: 'example1'},
            {id: 2, name: 'category2', description: 'example2'},
            {id: 3, name: 'category3', description: 'example3'}
            
        ];
    }
    // Para filtar: @Param('id')
    // findById 
    // filtrar por id
    @Get(':id')
    finById(@Param('id', ParseIntPipe) id: number): Category {
        return{
            id: id,
            name: 'cat1',
            description: 'prueba'
        }
    }
    // Filtrar por nombre
    // http://localhost:3000/category/filter-by-name/category1
    @Get('filter-by-name/:name')
    findByName(@Param('name') name: string){
        console.log(name);
        return{
            id: 1,
            name: name,
            description: 'prueba'
        }        
    }
    
    // create
    @Post()
    create(@Body() category: Category){
        //lo normal es que este objeto category venga sin id
        // lo guardemos en base de datos un un REpository
        // eso genere un nuevo id
        // devolvamos la category con el nuevo id
        return category;
    }

    // update sobre una categoría en concentro
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number,
    @Body() category: Category)
    {
        return category;
    }

    // delete
    @Delete(':id')
    deleteById(@Param('id', ParseIntPipe) id: number)
    {
        console.log(id);
        // repository.delete...
    }

    // para borrar todo:
     @Delete()
     deleteAll(){
        console.log("Borrando categorias");        
    }

}
