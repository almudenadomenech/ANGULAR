import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Category } from '../interfaces/category.model';
import { Book } from '../interfaces/book.model';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.css'
})
export class CategoryDetailComponent implements OnInit{

  category: Category | undefined;
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
      this.httpClient.get<Category>('http://localhost:3000/category/' + id)
      .subscribe(category => this.category = category);

      this.httpClient.get<Book[]>('http://localhost:3000/book/filter-by-category-id/'+ id)
      .subscribe(books => this.books = books);

    });
  }

}
