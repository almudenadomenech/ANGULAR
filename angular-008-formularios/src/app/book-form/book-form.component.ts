import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../interfaces/book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  bookForm = new FormGroup({
    title: new FormControl(''),
    numPages: new FormControl (150),
    price: new FormControl(),
    available: new FormControl(true),
    publishDate: new FormControl(),
    // Fecha por defecto:
    // publishDate: new FormControl(new Date().toISOString().slice(0, 16))
    category: new FormControl(),
    author: new FormControl(),
    topics: new FormControl([])
  });

  save(): void{
   /*  const title = this.bookForm.get('title')?.value;
    console.log(title);

    const numPages = this.bookForm.get('numPages')?.value;
    console.log(numPages);

    const price = this.bookForm.get('price')?.value;
    console.log(price);

    const available = this.bookForm.get('available')?.value;
    console.log(available);

    const publishDate = this.bookForm.get('publishDate')?.value;
    console.log(publishDate);

    const category = this.bookForm.get('category')?.value;
    console.log(category);

    const author = this.bookForm.get('author')?.value;
    console.log(author);

    const topics = this.bookForm.get('topics')?.value;
    console.log(topics); */

    // una vez ya se tienen todas las variables con todos los datos del formulario
    // se puede crear un objeto de tipo Boo y enviarlo a backend usando httClient o un servicio

    const book: Book = {
      title: this.bookForm.get('title')?.value ?? 'default', //string
      numPages: this.bookForm.get('numPages')?.value ?? 0, //entero
      price: this.bookForm.get('price')?.value ?? 0.0, //float
      available: this.bookForm.get('available')?.value ?? false, //boolena
      publishDate: this.bookForm.get('publishDate')?.value ?? new Date(),
      category: this.bookForm.get('category')?.value ?? 'default',
      topics: this.bookForm.get('topics')?.value ?? []  
    };
    console.log(book);
    
    
    // Una vez creado el objeto book se puede optar por enviar
    // con httpClient o servicio
    
  }

}
