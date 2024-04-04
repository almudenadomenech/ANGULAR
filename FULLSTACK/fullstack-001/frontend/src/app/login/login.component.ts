import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../interfaces/login.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { Token } from '../authentication/token.dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private httClient: HttpClient,
    private router: Router, 
    private authService: AuthenticationService){}

  save() {

    let login: Login = {
      email: this.loginForm.get('email')?.value ?? '',
      password: this.loginForm.get('password')?.value ?? ''
    }

    // Enviar por POST a backend con httClient
    let url = 'http://localhost:3000/user/login';
    this.httClient.post<Token>(url, login).subscribe(data => {
    console.log(data.token);
    
      this.authService.handleLogin(data.token);
      
      // Redirigir hacia la página home
      this.router.navigate(['/books']);
    });
    
  }
  

  }

