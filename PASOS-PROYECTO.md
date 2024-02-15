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

## PASO 5: LEVANTAR EL BACKEND

En otra terminal
json-server --watch db.json

## PASO 6: CREAR COMPONENTES

ng g c nombre del componente

## PASO 7: HACER EL ENRUTADO

Empezar con el list y luego detalle
Se pueden ir enrutando a medida que crece el proyecto, 
no hace falta hacerlos todos de golpe.

## PASO 8: CREAR LA INTERFACES
1. Crear una carpeta dentro de app
2. Crear las rutas en el app.component.htm en el navbar

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