## SEGURIDAD

1. En backen:

npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt

2. Crear el controlador de usuario:

* login
* register

En el FRONTEND:

libreria para decodificar el token en el frontend

npm install jwt-decode

En authentication:

1. 
ng generate guard authentication/role
dejar por defecto en la pregunta que te hace. Enter y ya está.
Se crea un archivo role.guards.ts en la carpeta.

2. Crear un intercetor
ng generate interceptor authentication/jwt


## VALIDAR TOKEN JWT EN BACKEND NESTJS

Crear un interceptor de peticiones HTTP en backend que sirva para detetar el token JWT que llega en cada perición de angular de un usuario autenticado.

Esto permite proteger / agregarr seguridad a los controladores, evitando que un usuario sin token pueda hacer peticiones a un método de un controlador.

Crear clase JwtStrategy que herede (extends) PassportStrategy

