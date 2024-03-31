import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Author } from '../interfaces/author.model';

@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, RouterLink],
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.css'
})
export class AuthorFormComponent implements OnInit{

  authorForm = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthDate: new FormControl(),
    salary: new FormControl(0.0),
    photoUrl: new FormControl(''),
    country: new FormControl(''),
    bio: new FormControl(''),
    wikipediaUrl: new FormControl('')
  });

  photoFile: File | undefined;
  photoPreview: string | undefined;
  isUpdate: boolean = false;
  author: Author | undefined;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) {
        return; // si no hay categoría se termina el método
      }

      this.httpClient.get<Author>(`http://localhost:3000/author/${id}`).subscribe(author => {
        this.isUpdate = true;
        this.author = author;
        // Si los nombres de los atributos del objeto author coinciden con los del formulario se puede cargar así:
        this.authorForm.reset(author);
      });

    });
  }

  onFileChange(event: Event) {

    let target = event.target as HTMLInputElement;

    if (target.files !== null && target.files.length > 0) {
      this.photoFile = target.files[0]; // extraer el primer archivo

      // Opcional: Mostrar la imagen por pantalla para previsualizarla antes de subirla
      let reader = new FileReader();
      reader.onload = event => this.photoPreview = reader.result as string;
      reader.readAsDataURL(this.photoFile);
    }

  }

  save() {

    let formData = new FormData();
    formData.append('id', this.authorForm.get('id')?.value ?? 0);
    formData.append('firstName', this.authorForm.get('firstName')?.value ?? '');
    formData.append('lastName', this.authorForm.get('lastName')?.value ?? '');
    formData.append('photoUrl', this.authorForm.get('photoUrl')?.value ?? ''); // Conservar photoUrl para no perder foto
    formData.append('birthDate', this.authorForm.get('birthDate')?.value ?? '');
    formData.append('salary', this.authorForm.get('salary')?.value + ''); // + '' Para conversión implítica de number a string
    formData.append('country', this.authorForm.get('country')?.value ?? '');
    formData.append('bio', this.authorForm.get('bio')?.value ?? '');
    formData.append('wikipediaUrl', this.authorForm.get('wikipediaUrl')?.value ?? '');

    if(this.photoFile) formData.append('file', this.photoFile);

    if(this.isUpdate) {
      const id =  this.authorForm.get('id')?.value;
      this.httpClient.put<Author>('http://localhost:3000/author/' + id, formData)
        .subscribe(author => {
          this.photoFile = undefined;
          this.photoPreview = undefined;
          this.author = author;
        });

    } else {
      this.httpClient.post<Author>('http://localhost:3000/author', formData)
        .subscribe(author => {
          this.photoFile = undefined;
          this.photoPreview = undefined;
          this.author = author;
        });
    }
  }

}
