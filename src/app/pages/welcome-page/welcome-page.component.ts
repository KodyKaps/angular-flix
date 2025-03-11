import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { LoginComponent } from '../login/login.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-page',
  imports: [CommonModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
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
