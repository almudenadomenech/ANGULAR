import { Component } from '@angular/core';
import { PedidosComponent } from "./pedidos/pedidos.component";
import { ProductosComponent } from "./productos/productos.component";
import { ClientesComponent } from "./clientes/clientes.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [PedidosComponent, ProductosComponent, ClientesComponent]
})
export class AppComponent {
  title = 'angular-002-componentes';
}
