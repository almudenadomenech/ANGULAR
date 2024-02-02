import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Producto } from '../interfaces/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // Crear un array de string con nombres
  nombres: string[]=["Juan", "Bea", "Almu","Susana"];

  // Crear un array de objetos productos
  productos: Producto[]= [
    // Crear objetos producto
    {
      title: "Producto 1",
      price: 40.33
    },
    {
      title: "Producto 2",
      price: 35.5
    },
    {
      title: "Producto 3",
      price: 42.35
    },
    {
      title: "Producto 4",
      price: 17.52
    }
    
  ];

  constructor() {}

}
