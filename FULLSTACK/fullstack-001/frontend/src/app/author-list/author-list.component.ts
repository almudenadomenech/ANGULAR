import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Author } from '../interfaces/author.model';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css'
})
export class AuthorListComponent implements OnInit{

  authors: Author[] = [];
  isAdmin = false;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService) {
      this.authService.isAdmin.subscribe(isAdmin => this.isAdmin = isAdmin);
    }

  ngOnInit(): void {
    this.httpClient.get<Author[]>('http://localhost:3000/author')
    .subscribe(authors => this.authors = authors);
  }

}
