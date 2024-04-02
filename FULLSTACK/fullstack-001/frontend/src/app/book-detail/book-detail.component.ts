import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Author } from '../interfaces/author.model';
import { Book } from '../interfaces/book.model';
import { Reservation } from '../interfaces/reservation.model';
import { Rating } from '../interfaces/rating.model';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [HttpClientModule, RouterLink, NgbRatingModule, DatePipe, ReactiveFormsModule],
  //providers: [NgbRatingModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit{

  book: Book | undefined;
  reservations: Reservation[] = [];
  ratings: Rating[] = [];
  // formulario para crear nuevos comentarios
  ratingForm = new FormGroup({
    score: new FormControl(0),
  comment: new FormControl('')
  });

  constructor(private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) {
        return; // si no hay categoría se termina el método
      }

      this.httpClient.get<Book>('http://localhost:3000/book/' + id)
      .subscribe(book => this.book = book);

      this.httpClient.get<Reservation[]>('http://localhost:3000/reservation/filter-by-book/'+ id)
      .subscribe(reservations => this.reservations = reservations);

      this.httpClient.get<Rating[]>('http://localhost:3000/rating/filter-by-book/'+ id)
      .subscribe(ratings => this.ratings = ratings);


    });
  }

}
