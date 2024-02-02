import { Component } from '@angular/core';
import { UserListComponent } from "./user-list/user-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [UserListComponent]
})
export class AppComponent {
  title = 'angular-004-botstrap';
}
