import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Book } from '../interfaces/book.model';
import { Reservation } from '../interfaces/reservation.model';
import { CurrencyPipe } from '@angular/common';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [HttpClientModule, RouterLink, ReactiveFormsModule, CurrencyPipe, NgbAlert],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {

  book: Book | undefined;
  price = 0;
  numDays = 0;
  showConfirmMessage = false;

  reservationForm = new FormGroup({
    startDate: new FormControl<Date>(new Date()),
    endDate: new FormControl<Date>(new Date()),
    premiumShip: new FormControl<boolean>(false)
  });

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) return;

      this.httpClient.get<Book>('http://localhost:3000/book/' + id)
      .subscribe(book => this.book = book);
    });
  }

  /*
  Calcula el precio total para la reserva en base a la cantidad de días
  seleccionados por el usuario y el precio por día del libro a reservar
  */
  calculatePrice() {

    let startDate = this.reservationForm.get('startDate')?.value;
    let endDate = this.reservationForm.get('endDate')?.value;

    if (!startDate || !endDate || !this.book || !this.book.price) {
      return; // si no hay fechas no se hace el cálculo
    }

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    const diffMilliseconds = endDate.getTime() - startDate.getTime();

    if (diffMilliseconds <= 0) {
      return;
    }

    this.numDays = diffMilliseconds / (1000 * 60 * 60 * 24);

    this.price = this.numDays * this.book.price;

    const isPremiumShip = this.reservationForm.get('premiumShip')?.value;
    console.log(isPremiumShip);

    if (isPremiumShip)
      this.price += 4.99;

      // Agregar más condiciones....

  }

  save() {

    // extraer los datos del formulario, crear un objeto reserva
    const reserva: Reservation = {
      id: 0,
      startDate: this.reservationForm.get('startDate')?.value ?? new Date(),
      endDate: this.reservationForm.get('endDate')?.value ?? new Date(),
      price: this.price,
      book: this.book
    };

    // enviar al backend con método POST
    this.httpClient.post<Reservation>('http://localhost:3000/reservation', reserva)
    .subscribe(reservation => {
      console.log(reservation);
      this.showConfirmMessage = true;

    });

  }

}
// User --> User
// Reservation --> Contract, Download, Booking, ....
// Book --> Application, Budget, House, Product, Treatment
