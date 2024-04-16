import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../interfaces/book.model';
import { AuthenticationService } from '../authentication/authentication.service';
import { Category } from '../interfaces/category.model';
import { Author } from '../interfaces/author.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [RouterLink, NgbAlertModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  showDeletedMessage: boolean = false;
  isAdmin = false;
  categories: Category[] = [];
  authors: Author[] = [];

  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService){
      this.authService.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);

    }

  ngOnInit(): void {
    this.httpClient.get<Category[]>('http://localhost:3000/category')
    .subscribe(categories => this.categories = categories);

    this.httpClient.get<Author[]>('http://localhost:3000/author')
    .subscribe(authors => this.authors = authors);

    this.loadBooks();
  }
  loadBooks() {
    this.httpClient.get<Book[]>('http://localhost:3000/book')
    .subscribe(booksFromBackend => this.books = booksFromBackend);
  }
  delete(book: Book) {
    this.httpClient.delete('http://localhost:3000/book/' + book.id)
    .subscribe(response => {
      this.showDeletedMessage = true;
      this.loadBooks();
    });
  }
  closeMessage() {
    this.showDeletedMessage = false;
  }
}
