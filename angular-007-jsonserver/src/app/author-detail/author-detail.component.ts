import { Component, OnInit } from '@angular/core';
import { Author } from '../interfaces/author.model';
import { AuthorService } from '../services/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [HttpClientModule, DatePipe],
  providers: [AuthorService],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent implements OnInit{
  
  author: Author | undefined;

  constructor(private authorService: AuthorService,
    private activatedRout: ActivatedRoute,
    private router: Router){}



  ngOnInit(): void {
    this.activatedRout.params.subscribe(params => {
      let id = params['id'];
      this.authorService.findById(id).subscribe(author => this.author = author);
    });   
  }

  deleteAuthor(){
    const remove = confirm("¿Quiere eliminar el autor?");

    if (!remove || !this.author) return; // Si no quiere borrar no continuamos

    this.authorService.deleteById(this.author.id).subscribe(() => {
      // navegar hacia author list
      this.router.navigate(['/autores'])


    });

  }

}
