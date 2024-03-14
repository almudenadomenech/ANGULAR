## CREAR PROYECTO

nest new nest-002-mysql --skip-git --package-manager npm

## LEVANTAR NEST
nest start --watch

## CREAR CONTROLADORES

Crear interface book.model.ts

nest generate controller Book

Recuperar datos:

* Métodos @Get()
* Métodos @Get() con parámetros
* Métodos @Get() con parámetro y pipe ParseIntPipe
* Devolver string
* Devolver un objeto
* Devolver un array de
* Crear nuevos datos:

Método @Post() (PARA CREAR UN PRODUCTO)
@Body() para recibir un objeto en método @Post()
Actualizar datos existentes:

Borrar datos existentes:
  @Delete(':id')
    @HttpCode(204) // por defecto devuelve status 204 no content
    deleteById(@Param('id', ParseIntPipe) id: number) 
    {
      console.log(id);
      // Comprobar si existe el libro
      // borrarlo si existe

      // throw new NotFoundException('Libro no encontrado');
      // throw new NotFoundException('No se puede borrar libro porque tiene elementos asociados');
    }

## POSTMAN

* GET -findAll, finById, findBy...
* POST -create
* PUT - update
* DELETE - deleteById, deleteAll

para POST y POST hay que enviar datos en el cuerpo (Body) de la petición:

* Body
* Raw
* JSON

## NESTJS

Backend sobre nodejs.

* Controladores: book.controller.ts Clases que reciben peticiones HTTP
  * @Get, @Post, @Put, @Delete

* Modelos/Entidades: book.model.ts Crea tablas en base de datos con la misma estructura
  * Configurar la concexión a MySQL
  * @Entity, @PrimaryGeneratedColumn

* Repository: métodos CRUD conectados a base de datos


## CREAR PROYECTO CON MYSQL

 1. nest  new nest-002-mysql --skip-git --package-manager npm
 2. cd nest-002-mysql
 3. npm install --save @nestjs/typeorm typeorm mysql2
 4. ng generate module database
 5. Añadir la configuración de MySQL
 6. Crear base de datos en MySQL Workbench
 7. book.model.ts
 8. ng generate controller Book
 9. Inyectar Repository en el BookController

 ## CONFIGURACIÓN BASE DE DATOS

app.module.ts:

* TypeOrmModule.forRoot()
* TypeOrmModule.forFeature()

## CONTROLADOR CON REPOSITORIO

En el constructor inyectar Repository

En los métodos del controlador se llama al repositorio.

El repositorio realiza operaciones CRUD contra la base de datos.

## PASOS PARA BACKEND

NOTA: modelo, interfaz, entidad, clase de datos, serían lo mismo en este contexto.

1. Crear un proyecto nest e instalar dependencias
2. Configurar mysql en app.module.ts
3. Crear un model.ts por cada interfaz de angular:
    * book.model.ts con decoradores: @Entity, @PrimaryGeneratedColumn, @Column
    * author.model.ts
    * category.model.ts
    * editorial.model.ts
    * Asociaciones entre modelos

4. Crear un controlador por cada modelo/interfaz/entidad:
    * book.controller.ts con operaciones CRUD
    * author.controller.ts 
    * category.controller.ts
    * editorial.controller.ts

5. Pruebas con POSTMAN y verificar que los controladores funcionan
6. Pruebas con MySQL Workbench y verificar que se crean tablas y se hace el CRUD

## PASOS 

1. Crear modelo: author.model.ts
2. Configurar modelo: app.module.ts
3. nest generate controller Author

## Instalar Open API, sería como un postman dentro de la propia aplicación backend:

npm install @nestjs/swagger

Modificar el main.ts para agregar la configuración de SwaggerModule

Entrar en http://localhost:3000/api

