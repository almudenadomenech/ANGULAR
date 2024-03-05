import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register } from '../interfaces/register.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = this.fb.group({
    // Campo obligatorio con un mínimo de 3 caracteres y un máximo de 15
    nickname:['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
    password: ['',[Validators.required]],
    passwordConfirm: ['', [Validators.required, ]]
  },
  {validators: this.passwordConfirmValidator}// Validador personalizado para comprobar que las contraseñas son iguales
  
  );

  constructor(private fb: FormBuilder,
    private httClient: HttpClient) {}

    // Método personalizado para validar si la contraseña es igual a la fonfirmación de contraseña
    passwordConfirmValidator(control: AbstractControl){

      if(control.get('password')?.value === control.get ('passwordConfrim')?.value){
        return null; // si coinciden, son iguales y portanto no hay error
      }else {
        return {
          'confirmError': true // si son distintas se devuelve error true
        }
      }
    }

    save(){
      let register: Register = {
        nickname: this.registerForm.get('nickname')?.value ?? '',
        email: this.registerForm.get('email')?.value ?? '',
        phone: this.registerForm.get('phone')?.value ?? '',
        password: this.registerForm.get('password')?.value ?? ''
      };

        let url = 'http://localhost:3000/register';
      this.httClient.post<Register>(url, register)
      .subscribe(res => {
        console.log(res);
        
      })
    }
}
