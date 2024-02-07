import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {

  // declarar el book
  book: Book | undefined;

  // constructor con httpClient
  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.http.get<Book>(`http://localhost:3000/books/${id}`).subscribe(book => this.book = book);
    });
  }


}

