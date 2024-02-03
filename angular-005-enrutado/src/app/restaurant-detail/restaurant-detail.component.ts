import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../interfaces/restaurant.model';

@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.css'
})
export class RestaurantDetailComponent implements OnInit{

  restaurant: Restaurant | undefined;

  constructor (private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    // params es un observable de rxjs
    // Calcula el id de la url (id del restaurante)

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']); //(para comprobar si funciona)
     // Convertir id de string a múmero
     
    let idString = params['id'];
    let idNum= parseInt(idString, 10);
    console.log(idNum);

    // crear un objeto restaurante con el id captutado
    this.restaurant = {
      id: idNum,
      name: "Tres Mares",
      location: "Calle Corazón de Maria",
      phone: "65821476",
      rating: 5,
      imageUrl: "https://placehold.co/500"
    }
    
     // Llamar al backend pidiendo el restaurante por el id 
    });

  }
    
}


