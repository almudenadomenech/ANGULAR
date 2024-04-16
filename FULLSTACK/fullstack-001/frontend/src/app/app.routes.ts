import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { roleAdminGuard } from './authentication/role.guard';
import { AccountFormComponent } from './account-form/account-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AvatarFormComponent } from './avatar-form/avatar-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/:id/detail',
    component: BookDetailComponent
  },
  {
    path: 'books/create',
    component: BookFormComponent,
    canActivate: [roleAdminGuard]
  },
  {
    path: 'books/:id/update',
    component: BookFormComponent,
    canActivate: [roleAdminGuard]
  },
  {
    path: 'categories/:id/detail',
    component: CategoryDetailComponent
  },
  {
    path: 'books/:id/reserve',
    component: ReservationFormComponent
  },
  {
    path: 'authors',
    component: AuthorListComponent
  },
  {
    path: 'authors/create',
    component: AuthorFormComponent,
    canActivate: [roleAdminGuard]
  },
  {
    path: 'authors/:id/update',
    component: AuthorFormComponent,
    canActivate: [roleAdminGuard]
  },
  {
    path: 'authors/:id/detail',
    component: AuthorDetailComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'account',
    component: AccountFormComponent
  },
  {
    path: 'reservations',
    component: ReservationListComponent
  },
  {
    path: 'account/avatar',
    component: AvatarFormComponent
  }

];
