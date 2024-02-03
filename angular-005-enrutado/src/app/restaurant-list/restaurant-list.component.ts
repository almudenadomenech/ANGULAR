import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Restaurant } from '../interfaces/restaurant.model';


@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {

  restaurants: Restaurant[] =[{

    id: 1,
    name: "100 montaditos",
    location: "C Corazón de Maria, 69",
    rating: 5,
    phone: "648521764",
    imageUrl: "https://placehold.co/300"
  },
  {

    id: 2,
    name: "La Montaña",
    location: "C. Gran via, 45",
    rating: 7,
    phone: "69824587",
    imageUrl: "https://placehold.co/300"
  },
  {

    id: 3,
    name: "Malaquias",
    location: "C Narvaez, 150",
    rating: 8,
    phone: "69801247",
    imageUrl: "https://placehold.co/300"
  },
  {

    id: 4,
    name: "100 montaditos",
    location: "C Corazón de Maria, 69",
    rating: 5,
    phone: "648521764",
    imageUrl: "https://placehold.co/300"
  },
];

}
