
### PASO 1: CREAR PROYECTO ANGULAR CON ENRUTADO

ng new angular- --skip-git --style=css --routing=true --ssr=false

### PASO 2: ENTRAR AL PROYECTO

cd angular-006-servicios

### PASO 3: INSTALAR BOOTSTRAP

ng add @ng-bootstrap/ng-bootstrap

## PASO 4: INSTALAR BOOTSTRAP-ICONS

npm i bootstrap-icons

En angular.json hay que agregar el bootstrap-icons.min.css a styles:

 "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/bootstrap-icons/font/bootstrap-icons.min.css",
              "src/styles.css"
            ],

## PASO 5: CREAR COMPONENTES

ng g c nombre del componente

## PASO 6: CREAR SERVICIOS

## INTERFACE

Utilizamos las interfaces para definir la estructura que tendrá un nuevo
tipo de dato concreto como por ejemplo: Producto,, Casa, Curso, Empresa, Coche:


 interface Producto {
    id: number;
    title: string;
    color: string;
    price: number;

 }

 Cada tributo en una interface prodría corresponder a una columna en una
 tabla.

 ## API DE PRODUCTOS DEMO

 https://fakestoreapi.com/

 ## REPASO SERVICIOS DE ANGULAR

1. Crear una carpeta services dentro de app
2. En consola Crear un servicio: 
   
   ng g s services/nombre

3. Inyectar servicio en componente: en el constructor

### HTTP CLIENT

Objeto proporcionado por Angular con métodos para realizar peticiones HTTP, enviar y recibir información del exterior.

Los métodos HTTP porporcionan soporte para las operaciones CRUD:

* GET - obtener información: productos (array), producto (objeto)

* POST - enviar información: enviar un objeto producto a un backend, este se utiliza para CREAR un producto en el backend. Equivale al INSERT de SQL.

* PUT - enviar información: enviar un objeto producto a un backend, este se utiliza para ACTUALIZAR un producto existente en el backend. Equivale a UPDATE de SQL.

* DELETE: solicita BORRAR información, indica al backend que borre el producto o lo que sea por su id o clave primaria

### OBJETIVO SERVICIOS

Los servicios pueden ser inyectados en los componentes, por lo tanto sirven para reutilizar métodos entre diferentes componentes.


## JSON SERVER (BACKEND FICTICIO / DEMO)

Backend ficticio a partir de un archivo json.

https://www.npmjs.com/package/json-server

1. Instalar json server

npm install -g json-server

2. Crear archivo db.json con datos demo dentro

db.json

3. Ejecutar backend json server (levantar el servidor)

json-server db.json






 





