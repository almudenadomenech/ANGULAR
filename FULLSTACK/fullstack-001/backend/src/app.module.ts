import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/book.model';
import { BookController } from './book/book.controller';
import { Author } from './author/author.model';
import { AuthorController } from './author/author.controller';
import { Category } from 'src/category/category.model';
import { Editorial } from './editorial/editorial.model';
import { User } from './user/user.model';
import { Reservation } from './reservation/reservation.model';
import { ReservationController } from './reservation/reservation.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'nest', // crear esta base de datos en MySQL primero
      entities: [Book, Author, Category, Editorial, User, Reservation],
      synchronize: true, // generar tablas en base de datos
      logging: true
    }),
    TypeOrmModule.forFeature([Book, Author, Category, Editorial, User, Reservation]) // Esto permite acceder a Repository
    
  ],
  controllers: [AppController, BookController, AuthorController, ReservationController],
  providers: [AppService],
})
export class AppModule {}