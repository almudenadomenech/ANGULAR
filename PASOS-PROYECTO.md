### PASO 1: CREAR PROYECTO ANGULAR CON ENRUTADO

ng new angular --skip-git --style=css --routing=true --ssr=false

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

## PASO 6: CREAR INTERFACES

1. Crear una carpeta dentro de app, llamada interfaces
2. Crear las interfaces

## PASO 7: HACER EL ENRUTADO

Empezar con el list y luego detalle
Se pueden ir enrutando a medida que crece el proyecto, 
no hace falta hacerlos todos de golpe.

## PASO 8: HACER EL JSON

Se crea debajo de Angular.json

## PASO 9: LEVANTAR FRONTEND

ng serve -o

## PASO 10: LEVANTAR BACKEND

json-server db.json

## PASO 9: HACER FORMULARIOS

en el ts del componente en imports
ReactiveFormsModule

## ACTUALIZAR ANGULAR

1. Desinstalar Angular:
  npm uninstall -g @angular/cli

2. Instalar la version:
  npm install -g @angular/cli@17.2.0

3. Crear proyecto:
ng new angular-009-forms-bootstrap --skip-git --style=css --routing=true --ssr=false

4. Boostrap:
  ng add @ng-bootstrap/ng-bootstrap

## HACER UN FORMULARIO

## CONECTAR FORMULARIOS

angular-009-forms-bootstrap:

* product-list
* product-detail
* product-form: creación y actualización

Objetivo: tener desarrollado un CRUD completo sobre productos.

## PASOS

1. ng generate component product-list

2. ng generate component product-detail

3. Enrutado en app.routes.ts

4. router-outlet en app.component.html

5. Copiar código: product-list.component.ts y product-list.component.html
    * agregar botones para llegar a product-form para crear (POST) y actualizar (PUT)

6. Copiar código: product-detail.component.ts y product-detail.component.html
    * agregar botón para llegar a product-form para actualizar (PUT)


## FUNCIONALIDAD ACTUALIZAR PRODUCTO (PUT)

1. Capturar el id (1,2,3 ...) de la URL utilizando activatedRoute de forma igual al product-detail.

2. Una vez capturado el id, si existe, entonces hacer un GET con httpClient para traer el producto por id, por ejemplo el producto 1.

3. Cargar los valores del producto en el formulario de productForm. De esta forma el formulario aparecerá con los valores del producto ya cargados para editarlos.

4. En el método save, distinguir si existe id entonces hacer un update PUT, si no existe id entonces hacer un create POST.


## ACTUALIZAR DESDE FORMULARIO

1. Enrutado:  
  * /products/: id/update se puede llegar al formulario
  * /produt


## USUARIOS

## LOGIN

1. ng g c login

2. Rutal en app.routers.ts

3. routerLink en la navbar o cualquier otra pantalla para poder llegar al login

4. Crear interface login

5. login component.ts

6. login.component.html

## REGISTRO

ng g c register

## USER LIST

ng g c user-list

## USER PROFILE

ng g c user-profile

## CREAR FRONTEND Y BACKEND

* Crear carpeta fullstack-001

* Crear backend:
1. nest new backend --skip-git --package-manager npm
2. cd backend
3. npm install --save @nestjs/typeorm typeorm mysql2 @nestjs/swagger

* Crear frontend:
1. ng new frontend --skip-git --style=css --routing=true --ssr=false
2. cd frontend
3. ng add @ng-bootstrap/ng-bootstrap
