import { Controller, Get, Param, ParseFloatPipe, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Author } from './author.model';

@Controller('author')
export class AuthorController {

    constructor(
      @InjectRepository(Author) private authorRepo: Repository<Author>
    ){}

    @Get()
    findAll() {
        return this.authorRepo.find();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number) {
      return this.authorRepo.findOne({
        where: {
          id: id
        }
      });
    }

    // Peticion en postman http://localhost:3000/author/filter-full-name/nombre2/apellido2
    @Get('filter-full-name/:firstname/:lastname')
    findByFirstNameAndLastName(
      @Param('firstname') firstname: string,
      @Param('lastname') lastname: string
      ){

        return this.authorRepo.find({
          where: {
            firstName: firstname,
            lastName: lastname
          }
        })
    }

    @Get('filter-by-salary/:salary')
    finBySalary(@Param('salary', ParseFloatPipe) salary: number) {
      
      return this.authorRepo.find({
        where: {
        // coincidencia exacta
        //  salary: salary
        salary: MoreThanOrEqual(salary)
        },
        // ordenado de manera descendente
        order: {
          salary:'DESC'
        }
      })
    }
}
