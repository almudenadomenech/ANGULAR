import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/book.model';
import { BookController } from './book/book.controller';
import { Author } from './author/author.model';
import { AuthorController } from './author/author.controller';
import { Category } from './category/category.model';
import { Editorial } from './editorial/editorial.model';
import { User } from './user/user.model';
import { Reservation } from './reservation/reservation.model';
import { ReservationController } from './reservation/reservation.controller';
import { CategoryController } from './category/category.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { Rating } from './rating/rating.model';
import { RatingController } from './rating/rating.controller';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        // carpeta destino donde guardar los archivos
        destination: './uploads',
        // Opcional: generar un nombre único para el archivo antes de guardarlo:
        // 1f82d390-d902-4aed-ad23-d543f56f2433.png
        filename: (req, file, callback) => {
          let fileName = uuidv4() + extname(file.originalname);
          callback(null, fileName);
        }
      })
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'nest', // crear esta base de datos en MySQL primero
      entities: [Book, Author, Category, Editorial, User, Reservation, Rating],
      synchronize: true, // generar tablas en base de datos
      logging: true
    }),
    TypeOrmModule.forFeature([Book, Author, Category, Editorial, User, Reservation, Rating]) // Esto permite acceder a Repository
    
  ],
  controllers: [BookController, AuthorController, ReservationController, CategoryController, RatingController],
  providers: [],
})
export class AppModule {}
