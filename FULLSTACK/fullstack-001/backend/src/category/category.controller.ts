import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.model';
import { Repository } from 'typeorm';

@Controller('category')
export class CategoryController {

    constructor(
        @InjectRepository(Category) private categoryRepository: Repository<Category>
    ){}
    @Get()
    findAll() {
        return this.categoryRepository.find();
    }

    @Get(':id') // :id es una variable, parámetro en la url
    findById(@Param('id', ParseIntPipe) id: number ) {
        return this.categoryRepository.findOne({
          
            where: {
                id: id
            }
        });
    }
}
