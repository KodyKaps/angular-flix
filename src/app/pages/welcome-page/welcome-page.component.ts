import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { LoginComponent } from '../login/login.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../material.imports';

@Component({
  selector: 'app-welcome-page',
  imports: [MATERIAL_IMPORTS, CommonModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }
  /**This is the function that will open the dialog when the signup button is clicked*/  
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationComponent, {
      /**  Assigning the dialog a width*/
      width: '280px'
    });
  }

  openLoginDialog(): void {
    this.dialog.open(LoginComponent, {
      /**Assigning the dialog a width*/
      width: '280px'
    });
  }

  goToMovies(): void{
    this.router.navigate(['/movies'])
  }
}
