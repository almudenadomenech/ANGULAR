import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [ HttpClientModule, RouterLink ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit { // ?????

  // array de books
  books: Book[] = [];

  // constructor con httpClient
  constructor(private http: HttpClient) { }

  // ngOnInit inicializar el array trayendo libros con httpClient
  // Ejemplo SIN SERVICIO
  ngOnInit(): void {
    this.http.get<Book[]>('http://localhost:3000/books')
    .subscribe(books => this.books = books);
  }



}
