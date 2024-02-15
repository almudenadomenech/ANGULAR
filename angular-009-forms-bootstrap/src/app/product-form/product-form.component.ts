import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Manufacturer } from '../interfaces/manufacture.model';
import { Category } from '../interfaces/category.model';
import { Product } from '../interfaces/product.modul';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  // Estos datos se recuperarian de BACKEND
  // utilizando un SERVICIO o
  // directamente un httpClient y peticiones GET
  manufactures: Manufacturer[] = [
    {id: 1, name: "FilaMotor", year: 2012},
    {id: 2, name: "Pepsi", year: 1920},
    {id: 3, name: "Coca Cola", year: 1915},];

  categories: Category[] = [
    {id: 1, name: "Bebidas"},
    {id: 2, name: "Carne"},
    {id: 3, name: "Legumbres"},
    {id: 4, name: "Vegan"}  ];

  productForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    price: new FormControl(null, [Validators.min(0), Validators.max(500)]),
    available: new FormControl(false),
    publishDate: new FormControl(null),
    manufacturer: new FormControl(),
    categories: new FormControl([])

  });

  constructor(private httClient: HttpClient){}
  save(): void {
    console.log('invocando save');

    const product: Product = {
      id: this.productForm.get('id')?.value ?? 0,
      title: this.productForm.get('title')?.value ?? '',
      price: this.productForm.get('price')?.value ?? 0,
      available: this.productForm.get('available')?.value ?? false,
      publishDate: this.productForm.get('publishDate')?.value ?? new Date(), 
      manufacturer: this.productForm.get('manufacturer')?.value,
      categories: this.productForm.get('categories')?.value ?? []
    };
    console.log(product);
    const url= 'http://localhost:3000/products';

    // CREATE de las operaciones CRUD
    this.httClient.post<Product>(url, product)
    .subscribe(data => console.log(data));
    
    
  }

}
