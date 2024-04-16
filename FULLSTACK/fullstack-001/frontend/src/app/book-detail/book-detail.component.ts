import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from '../interfaces/book.model';
import { Reservation } from '../interfaces/reservation.model';
import { Rating } from '../interfaces/rating.model';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [RouterLink, NgbRatingModule, DatePipe, ReactiveFormsModule],
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
    private activatedRoute: ActivatedRoute) {
    }

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

  save() {
    const rating: Rating = {
      id: 0,
      score: this.ratingForm.get('score')?.value ?? 0,
      comment: this.ratingForm.get('comment')?.value ?? '',
      book: this.book
    }
    this.httpClient.post<Rating>('http://localhost:3000/rating', rating)
    .subscribe(rating => {
      this.ratingForm.reset();
      this.httpClient.get<Rating[]>('http://localhost:3000/rating/filter-by-book/'+ this.book?.id)
      .subscribe(ratings => this.ratings = ratings);
    });
  }

  downloadFile() {
    const url = 'http://localhost:3000/book/download/prueba/prueba'; // La URL de tu API
    this.httpClient.get(url, {
      responseType: 'blob',
    }).subscribe(res => {
      const blob = new Blob([res], { type: 'application/octet-stream' });

      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'certidevs.exe';  // O el nombre que desees.
      link.click();

      window.URL.revokeObjectURL(downloadUrl);
      link.remove();
    });
  }

}
