import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register } from '../interfaces/register.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = this.fb.group({
    //nickname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]],
    //phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
    password: ['', [Validators.required]],
    passwordConfirm: ['', [Validators.required]]
  },
  {validators: this.passwordConfirmValidator} // Validador personalizado para comprobar que las contraseñas son iguales
  );
  
  error = '';

  constructor(private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router) {}

    // Método personalizado para validar si la contraseña es igual a la confirmación de contraseña
  passwordConfirmValidator(control: AbstractControl){
    if(control.get('password')?.value === control.get('passwordConfirm')?.value){
      return null; // si coinciden, son iguales y por tanto no hay error.
    } else {
      return {
        'confirmError': true // si son distintas se devuelve error true
      }
    }
  }

  save(){

    let register: Register = {
      //nickname: this.registerForm.get('nickname')?.value ?? '',
      email: this.registerForm.get('email')?.value ?? '',
      //phone: this.registerForm.get('phone')?.value ?? '',
      password: this.registerForm.get('password')?.value ?? '',
    };

    let url = 'http://localhost:3000/user/register';
    this.httpClient.post<Register>(url, register).subscribe({

      next: data => {
        this.router.navigate(['/login']);
      },
      error: error => {
        if (error.status == 409){
          this.error = 'Email ocupado';
        }

      }
    });


  }
}
