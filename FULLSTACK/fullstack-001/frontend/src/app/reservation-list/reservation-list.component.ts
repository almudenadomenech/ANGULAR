import { Component, OnInit } from '@angular/core';
import { Reservation } from '../interfaces/reservation.model';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = [];
  isAdmin = false;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService,
  ) {
    this.authService.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);
  }

  ngOnInit(): void {

    const url = 'http://localhost:3000/reservation/filter-by-current-user';
    this.httpClient.get<Reservation[]>(url)
    .subscribe(reservations => this.reservations = reservations);
  }

}
