import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Author } from '../interfaces/author.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink, DatePipe],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css'
})
export class AuthorListComponent implements OnInit{

  authors: Author[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Author[]>('http://localhost:3000/author')
    .subscribe(authors => this.authors = authors);
  }

}
