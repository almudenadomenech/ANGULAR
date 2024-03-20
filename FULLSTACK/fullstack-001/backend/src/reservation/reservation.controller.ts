import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './reservation.model';
import { Repository } from 'typeorm';
import { log } from 'console';

@Controller('reservation')
export class ReservationController {


    constructor(
        @InjectRepository(Reservation) 
        private reservationRepo: Repository<Reservation>
    ) {}

    @Get()
    findAll() {
        return this.reservationRepo.find();
    }

    @Get('filter-by-id/:id') // :id es una variable, parámetro en la url
    findById( @Param('id', ParseIntPipe) id: number ) {
        return this.reservationRepo.findOne({
            where: {
                id: id
            }
        });
    }
    // http://localhost:3000/reservation/filter-by-user/2
    @Get('filter-by-user/:id')
    findByUserId(@Param('id', ParseIntPipe) id: number){
        return this.reservationRepo.find({
            where: {
                user: {
                    id: id
                }
            }
        });
    }

    @Get('filter-by-book/:id')
    findByBookId(@Param('id', ParseIntPipe) id: number){
        return this.reservationRepo.find({
            where: {
                book: {
                    id: id
                }
            }
        });
    }

    // Filtro dinámico para soportar múltiples parámetros al filtrar
    @Get('filter')
    findWithFilter(@Query() filters: any) {
        console.log(filters);

        // Si está vacío devolver .find() sin filtro (No hace falta)
        // Ejemplo: http://localhost:3000/reservation/filter
        // if(Object.keys(filters).length === 0) 
        //    return this.reservationRepo.find();

        // Si no está vacío entonces filtar:
        // Ejemplo: http://localhost:3000/reservation/filter?user.id=3&startDate=2024-01-01&price=244
        return this.reservationRepo.find({
            where: filters
        });
    }

    @Post()
    create(@Body() reservation: Reservation) {
        return this.reservationRepo.save(reservation);
    }


}
