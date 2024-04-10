import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgbAlert, RouterLink],
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.css'
})
export class AccountFormComponent implements OnInit{

  user: User | undefined;

  userForm = new FormGroup({
    phone: new FormControl(),
    addressStreet: new FormControl()
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<User>('http://localhost:3000/user/account').subscribe(user => {
      this.user = user;
      this.userForm.reset(user);
    });
  }

  save() {
    if(!this.user) return;

    this.user.phone = this.userForm.get('phone')?.value;
    this.user.addressStreet = this.userForm.get('addressStreet')?.value;

    this.httpClient.put('http://localhost:3000/user', this.user).subscribe(data => {
      // mostrar mensaje de OK
      // navegar a home
    });

  }

}
