import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Manufacturer } from '../interfaces/manufacturer.model';

@Component({
  selector: 'app-manufacturer-detail',
  standalone: true,
  // IMPORTANTE agregar NgbCarouselModule para poder mostrar el carousel de NgBootstrap
  imports: [HttpClientModule, RouterLink, NgbCarouselModule],
  templateUrl: './manufacturer-detail.component.html',
  styleUrl: './manufacturer-detail.component.css'
})
export class ManufacturerDetailComponent implements OnInit{

  // este manufacturer tiene un array de imágenes dentro
  manufacturer: Manufacturer | undefined;

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.http.get<Manufacturer>(`http://localhost:3000/manufacturers/${id}`)
        .subscribe(manufacturer => this.manufacturer = manufacturer);
    });
  }


}
