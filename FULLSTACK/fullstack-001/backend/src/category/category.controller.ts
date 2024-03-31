import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.model';
import { Repository } from 'typeorm';

@Controller('category')
export class CategoryController {

    constructor(
        @InjectRepository(Category) private categoryRepo: Repository<Category>
    ){}

    @Get()
    findAll() {
        return this.categoryRepo.find();
    }

    @Get(':id')
    findById( @Param('id', ParseIntPipe) id: number ) {
        return this.categoryRepo.findOne({
            where: {
                id: id
            }
        });
    }
    
}
