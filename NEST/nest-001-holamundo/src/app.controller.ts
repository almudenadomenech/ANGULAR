import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


/**
 * El controles hace que esta clase pueda recibir periciones HTTP 
 * como por ejemplo las creada por HttpCliente en Angular
 * 
 * Angular (httpClient) --> Controler en NestJs
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {

    return "Hola mundo soy un controlador de Nest"
    // return this.appService.getHello();
  }
  @Get('prueba')
  prueba(): string{
    return "Pruebas desde NestJS";

  }

  @Get('product')
  findProduct(): any {
    return {
      id: 1,
      title: 'producto 1'
    };
  }
}
