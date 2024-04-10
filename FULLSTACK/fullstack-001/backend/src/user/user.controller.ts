import { Body, ConflictException, Controller, Get, NotFoundException, Post, Put, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Register } from './register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository } from 'typeorm';
import { Role } from './role.enum';
import { Login } from './login.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import * as bcrypt from 'bcrypt' // agregarlo manual

@Controller('user')
export class UserController {


    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService
    ) {}
    
    @Post('register')
    async register(@Body() register: Register) {
        
        const exists = await this.userRepository.existsBy({
            email: register.email
        });

        if(exists)
            throw new ConflictException("Email ocupado");

        // cifrar contraseña. El 10 es la fuerza de cifrado
        //const password = bcrypt.hashSync(register.password, 10);

        // crear usuario en base de datos
        const user: User = {
            id: 0,
            email: register.email,
            password: register.password, // para el cifrado password: password
            phone: null,
            role: Role.USER,
            addressStreet: null
            // addressPostalCode
            // addressCity
            // addressCountry
        };
        await this.userRepository.save(user);
    }

    @Post('login')
    async login(@Body() login: Login) {

        // comprobar si el email existe
        const exists = await this.userRepository.existsBy({
            email: login.email
        });

        // comparar contraseñas
        

        if(!exists)
            throw new NotFoundException("Usuario no encontrado."); // 404 

        // Recuperar el usuario
        const user = await this.userRepository.findOne({
            where: {
                email: login.email
            }
        });

        // Comparar contraseñas
        // IMPORTANTE: la contraseña de la base de datos está CIFRADA con bcrypt

       /*   if (!bcrypt.compareSync(login.password, user.password)){
            throw new UnauthorizedException("Credenciales incorrectas")
        } */
        if (user.password !== login.password) {
            throw new UnauthorizedException("Credenciales incorrectas"); // 401
        }

        // Crear y devolver token de acceso (JWT)
        let userData = {
            sub: user.id,
            email: user.email,
            role: user.role
        };

        let token = {
            token: await this.jwtService.signAsync(userData)
        }
        return token;

    }

    // get Current User: Se utilizara en la pantalla mi perfil de frontend para enviar usuario.
    @Get('account')
    @UseGuards(AuthGuard('jwt'))
    public getCurrentAccountUser(@Request() request){
        // TODO quitar la contraseña antes de devolver el usuario
        return request.user;
    }
    // update user

    @Put()
    @UseGuards(AuthGuard('jwt'))
    public update(@Body() user: User, @Request() request){

        if(request.user.role !== request.user.id){
            // Si el usuario que actualiza no coincide con el usuario enviado
            // Entonces no puede actualizar
            throw new UnauthorizedException();
        }
        return this.userRepository.save(user);  
    }
    
}
