# COMANDOS TERMINAL


### ABRIR TERMINAL DESDE VISUAL STUDIO CODE

Desde Visula Sudio Code en menú superior Terminal y pulsamos New Terminal.

Otra opción es en Windows escribir cmd en el  buscador y abrir la cmd

Otra opción sería abrir Git Bash.

### 

* pwd: mostrar el directorio en el que estamos esesa terminal
* ls: muestra lo que hay en el directorio actual.
* ls -lhrt: muestra con más detalle.
* ll: muestra lo que hay en el directorio conmás detalle

* cd nombrecarpeta: te deja entrar en una carpeta

nota: si pulsamos tab mientras escribimos nos ayuda a autocompletar.

* cd.. 
* Ctrl + c se usa para romper un proceso en ejecución, inerrumpir un comando ejecutado previamente.
* mkdir nombredirectorio: crea un directorio en la carpeta donde estamos ubicados

* mkdir -p nombredirectorio/nombredirectorio2

* touch nombrearchivo: para crear un archivo en el direcotio actual

* echo "Hola mundo" >> nombrearchivo.txt

* rm -rf nombrecarpeta : PARA BORRAR


* Angular:
    * 1. Crear un proyecto
    * ng new nombreproyecto: genera un proyecto y efecuta npm init automático para descargar dependencias y  crea node_modules.
    * ng new angular-001-holamundo --skip-git --style=css --routing=false --ssr=false

    * 2. Entrar dentro del proyecto
    * cd nombreproyecto. entrar al protecto angular creado./ clic derecho en la carpeta y abrir terminal.
    * ng generate component nombrecomponente: para un componente angular
    * ng generate service nombreservicio: para un servicio angular
    * ng serve: ejecutar el proyecto angular, inicia la aplicación

* Clonar un proyecto:
    * git clone urlproyectogithub
    * npm para instalas las dependencias


## DIRECTIVAS

ng new angular-003-directivas --skip-git --style=css --routing=false --ssr=false

cd angular-003-directivas

ng generate component product-list

ng generate component product-detail

app.components borrar el htm

## RECOMENDACION:

* Crear proyecto angular
* saber entrar y salir de un proyecto por terminal con cd
* Arrancar un proyecto con ng serve
* Crear componentes
