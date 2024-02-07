import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

export const routes: Routes = [

  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'libros',
    component: BookListComponent
  },
  {
    path: 'libros/:id/detalle',
    component: BookDetailComponent
  },
  {
    path: 'autores',
    component: AuthorListComponent
  },
  {
    path: 'autores/:id/detalle',
    component: AuthorDetailComponent
  },
  {
    path: 'categorias',
    component: CategoryListComponent,
  },
  {
    path: 'categorias/:id/detalle',
    component: CategoryDetailComponent
  }



];
