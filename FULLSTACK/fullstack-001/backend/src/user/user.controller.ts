import { BadRequestException, Body, ConflictException, Controller, Get, NotFoundException, Post, Put, Request, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { Register } from './register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository } from 'typeorm';
import { Role } from './role.enum';
import { Login } from './login.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import * as bcrypt from 'bcrypt'; // npm install bcrypt
import { FileInterceptor } from '@nestjs/platform-express';

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
            throw new ConflictException("Email ocupado");// 409

        // Cifrar contraseña. El 10 es la fuerza de cifrado
        const password = bcrypt.hashSync(register.password, 10);

        // crear usuario en base de datos
        const user: User = {
            id: 0,
            email: register.email,
            password: password,
            phone: null,
            role: Role.USER,
            addressStreet: null,
            photoUrl: null
        };
        await this.userRepository.save(user);
    }

    @Post('login')
    async login(@Body() login: Login) {

        // comprobar si el email existe
        const exists = await this.userRepository.existsBy({
            email: login.email
        });
        if(!exists)
            throw new NotFoundException("Usuario no encontrado."); // 404 

        // Recuperar el usuario
        const user = await this.userRepository.findOne({
            where: {
                email: login.email
            }
        });

        // Comparar contraseñas
        // IMPORTANTE: la contraseña de base de datos está CIFRADA con bcrypt
        //if (user.password !== login.password) {
        if (! bcrypt.compareSync(login.password, user.password)) {
            throw new UnauthorizedException("Credenciales incorrectas."); // 401
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

    // get Current User: se utilizará en la pantalla Mi Perfil de frontend
    @Get('account')
    @UseGuards(AuthGuard('jwt'))
    public getCurrentAccountUser(@Request() request) {
        // TODO quitar la contraseña antes de devolver el usuario
        return request.user;
    }



    // update user: Actualiza el usuario se utiliza desde la pantalla Mi Perfil de frontend para enviar usuario
    @Put()
    @UseGuards(AuthGuard('jwt'))
    public update(@Body() user: User, @Request() request) {

        if (request.user.role !== Role.ADMIN && user.id !== request.user.id) {
            // Si el usuario que actualiza no coincide con el usuario enviado
            // entonces no puede actualizar 
            throw new UnauthorizedException();
        }

        return this.userRepository.save(user);
    }

    // subir avatar
    @Post('avatar')
    @UseInterceptors(FileInterceptor('file'))
    @UseGuards(AuthGuard('jwt'))
    async uploadAvatar(
        @UploadedFile() file: Express.Multer.File,
        @Request() request
    ) {
        
        if (!file) {
            throw new BadRequestException('Archivo incorrecto');
        }

        // Guardar la ruta del archivo en un atributo del user
        request.user.photoUrl = file.filename;
        return await this.userRepository.save(request.user);
    }
    
}
