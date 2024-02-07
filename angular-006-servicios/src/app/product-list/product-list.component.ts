import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../interfaces/product.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{


  products: Product[] = []; // ARRAY DE PRODUCTOS QUE VIENEN DE FAKESTORE API

  constructor(private productService: ProductService){}
  
  ngOnInit(): void {
    // llamar al servicio y traer los productos de FAKE STORE API
    this.productService.findAll().subscribe(products => this.products = products); 
  }

  imprimirHola(): void {
    let texto = this.productService.holaMundo();
    console.log(texto);
    
  }

  imprimirProducto(): void {

    // Obtener el producto e imprimirlo por consola
    this.productService.obtenerProducto1().subscribe(p => console.log(p));  
  }
  crearProducto(): void {
    const tvSamsung: Product = {
      id: 1,
      title: 'Samsung',
      price: 650,
      description: 'Televisor',
      category: 'Electrónica',
      image: '',
      rating: {
        rate: 5,
        count: 120
      }


    }
    this.productService.create(tvSamsung).subscribe(p => console.log(p));
    
  }
  actualizarProducto(): void{
    const tvSamsung: Product = {
      id: 1,
      title: 'Samsung modificado',
      price: 650,
      description: 'Televisor',
      category: 'Electrónica',
      image: '',
      rating: {
        rate: 5,
        count: 120
      }

    };
    this.productService.update(1, tvSamsung).subscribe(p => console.log(p));
   

  }
  borrarProducto() {
    this.productService.deleteById(10).subscribe(p => console.log(p));
    
    }

 
}
