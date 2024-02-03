import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantBookingComponent } from './restaurant-booking/restaurant-booking.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [

     /**
     * Opción 1: redirigir a un listado
     */
    
   /*  {
        path: '',
        // component: RestaurantListComponent,
        redirectTo: '/restaurantes', 
        pathMatch: 'full' // CASO ESPECIAL: para evitar comportamiento que detecte cualquier url ya 
                         // que todas la urls empiezan por una cadena vacia.

    }, */
    /**
     * opcion 2: Crear un componente HOME que sea la pantalla de inicio desde don navegar a los 
     * listados.
     */
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'restaurantes',
        component: RestaurantListComponent
    },
    {
        path: 'restaurantes/nuevo',
        component: RestaurantListComponent
    },
    {
        path: 'restaurantes/:id/detalle',
        component: RestaurantDetailComponent
    },
    {
        path: 'restaurantes/:id/reservas',
        component: RestaurantBookingComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',  // Ruta comodín (mientras no coincida con las otras rutas)
        redirectTo: '/not-found-404'
    }
];
