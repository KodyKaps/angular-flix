import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component, input } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './pages/login/login.component';
import { MATERIAL_IMPORTS } from './material.imports';
import { MovieCardComponent } from './movie-card/movie-card.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, MATERIAL_IMPORTS
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-flix';

  constructor(public dialog: MatDialog) { }
  // This is the function that will open the dialog when the signup button is clicked  
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationComponent, {
      // Assigning the dialog a width
      width: '280px'
    });
  }

  openLoginDialog(): void {
    this.dialog.open(LoginComponent, {
      // Assigning the dialog a width
      width: '280px'
    });
  }

  openMoviesDialog(): void {
    this.dialog.open(MovieCardComponent, {
      width: '500px'
    });
  }
}
