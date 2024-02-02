import { DatePipe, NgStyle } from '@angular/common';
import { User } from '../interfaces/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [DatePipe, NgStyle],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  // atributos
  users: User [] = [];

  // constructor (si lo necesitas)
  constructor(){}

  // metodos
    ngOnInit(): void {
      // ngOnInit método especial ejecutado por Angular
      // automáticamente al entrar en el componente

      this.users = [
        {
          id: 1,
          email: "user1@gmail.com",
          salary: 500.0,
          active: true,
          registerDate: new Date()
        },
        {
          id: 2,
          email: "user2@gmail.com",
          salary: 3000.0,
          active: false,
          registerDate: new Date()
        },
        {
          id: 3,
          email: "user3@gmail.com",
          salary: 2500.0,
          active: false,
          registerDate: new Date()
        },
        {
          id: 4,
          email: "user4@gmail.com",
          salary: 3000.0,
          active: true,
          registerDate: new Date()
        },
        {
          id: 2,
          email: "user2@gmail.com",
          salary: 2800.0,
          active: true,
          registerDate: new Date()
        },

      ]
    }
  

}
