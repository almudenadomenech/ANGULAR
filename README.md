## CREACIÓN DE NUEVO PROYECTO ANGULAR CON BOOTSTRAP Y BOOTSTRAP-ICONS

### PASO 1: CREAR PROYECTO ANGULAR CON ENRUTADO

ng new angular-006-servicios --skip-git --style=css --routing=true --ssr=false
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

## INTERFACE

Utilizamos las interfaces para definir la estructura que tendrá un nuevo
tipo de dato concreto como por ejemplo: Producto,, Casa, Curso, Empresa, Coche:


 interface Producto {
    id: number;
    title: string;
    color: string;
    price: number;

 }

 Cada tributo en una interfaceprodría corresponder a una columna en una
 tabla.
