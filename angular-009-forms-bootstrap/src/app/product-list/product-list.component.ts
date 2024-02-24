import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink, DatePipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/products')
    .subscribe(products => this.products = products);  }

}
