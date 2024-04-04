import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { DecodedToken } from './token.dto';

// ng generate service authentication/authentication
// npm install jwt-decode
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Comprueba si un usuario ya está logueado, es decir, existe token
  // Notifica a quien se haya suscrito a este booleano de que ha ocurrido un login
  isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  userEmail = new BehaviorSubject<string>(this.getCurrentEmail());
  isAdmin = new BehaviorSubject<boolean>(this.getIsAdmin());

  constructor() { }

  hasToken(): boolean {
    return localStorage.getItem("jwt_token") !== null;
  }

  handleLogin(token: string) {
    // guardar el token en el almacenamiento del navegador
    localStorage.setItem("jwt_token", token);
    this.isLoggedIn.next(true);
    this.userEmail.next(this.getCurrentEmail());
    this.isAdmin.next(this.getIsAdmin());
  }
  getCurrentEmail() {
    // decodificar el token y extraer la información que tiene dentro
    const token = localStorage.getItem("jwt_token");
    if(!token) return '';

    const decodedToken = jwtDecode(token) as DecodedToken;
    return decodedToken.email;
  }
  getIsAdmin() {
    const token = localStorage.getItem("jwt_token");
    if(!token) return false;
    
    const decodedToken = jwtDecode(token) as DecodedToken;
    return decodedToken.role === 'admin';
    }
  logout() {
    localStorage.removeItem("jwt_token");
    this.isLoggedIn.next(false);
    this.userEmail.next('');
    this.isAdmin.next(false);
  }

}
