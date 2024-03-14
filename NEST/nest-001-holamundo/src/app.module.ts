import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { AuthorController } from './author/author.controller';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [],
  controllers: [AppController, BookController, AuthorController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
