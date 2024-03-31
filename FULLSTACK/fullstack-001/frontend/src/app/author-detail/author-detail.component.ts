import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Author } from '../interfaces/author.model';
import { Book } from '../interfaces/book.model';
import { Category } from '../interfaces/category.model';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent implements OnInit{

  author: Author | undefined;
  books: Book[] = [];

  constructor(private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) {
        return; // si no hay categoría se termina el método
      }

      // traer categoría y libros
      this.httpClient.get<Author>('http://localhost:3000/author/' + id)
      .subscribe(author => this.author = author);

      this.httpClient.get<Book[]>('http://localhost:3000/book/filter-by-author/'+ id)
      .subscribe(books => this.books = books);

    });
  }

}
