import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Manufacturer } from '../interfaces/manufacturer.model';

@Component({
  selector: 'app-manufacturer-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './manufacturer-list.component.html',
  styleUrl: './manufacturer-list.component.css'
})
export class ManufacturerListComponent implements OnInit {

  manufacturers: Manufacturer[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = 'http://localhost:3000/manufacturers';
    this.http.get<Manufacturer[]>(url)
    .subscribe(manufacturers => this.manufacturers = manufacturers);
    
  }

}
