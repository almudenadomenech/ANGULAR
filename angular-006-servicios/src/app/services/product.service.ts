import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private httpClient: HttpClient) { }

    // metodos
  holaMundo(): string{
    return "Hola Mundo";

  }
  obtenerProducto1():Observable<Product>{

  return this.httpClient.get<Product>('https://fakestoreapi.com/products/1');
 }

 // Obtener todos los productos
findAll(): Observable<Product[]> {
  return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
}

 // Obtener todos los productos por su id como parámetro
 // Obtener los datos
 findById(id: number | string) {
  return this.httpClient.get<Product>(`https://fakestoreapi.com/products/${id}`);
 }

 // Método create para enviar un producto al API REST
 // Esto sería un nuevo producto en base de datos
 // Post para enviar los datos

 create(product: Product) {
  return this.httpClient.post<Product>('https://fakestoreapi.com/products', product);
 }

 // Metodo para actualizar un producto en API REST (put)

 update(id: number | string, product: Product): Observable<Product>{
  return this.httpClient.put<Product>(`https://fakestoreapi.com/products/${id}`, product);
 }

 // Metodo para borrar un producto (delete)
 deleteById(id: number | string) {

  return this.httpClient.delete('https://fakestoreapi.com/products/' + id);
  
}
 
}
