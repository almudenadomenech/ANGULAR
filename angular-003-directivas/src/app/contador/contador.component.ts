import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  // metodo para decrementar


  // Crear variable contador number sin valor
  contador: number | undefined;


  // metodo para incrementar
  Incrementar() {
    if(!this.contador){
      this.contador = 0;
    }
      this.contador++;
    }

  // metodo para decrementar
  Decrementar() {
    if(!this.contador)
      this.contador = 0;
    
      if(this.contador > 0)// condicion para evitar decrementar por debajo de cero
      this.contador--;
    
    }

 // método para resetear a undefined
 Resetear() {
  this.contador = undefined;
  }

// método getCounterStyle para obtener color en base a un número
// y usarlo con la directiiiva Style

getCounterStyle(): any{
  if (this.contador && this.contador < 5){
    return {color:"red"};
  }else if (this.contador && this.contador < 10){
    return {color: "blue"};
  }else {
    return{color: "green"};
  }
 

}

}
