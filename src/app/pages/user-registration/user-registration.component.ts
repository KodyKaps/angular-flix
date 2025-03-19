/** src/app/user-registration-form/user-registration-form.component.ts*/
import { Component, OnInit, Input } from '@angular/core';

/** You'll use this import to close the dialog on success*/
import { MatDialogRef } from '@angular/material/dialog';

/** This import brings in the API calls we created in 6.2*/
import { MovieApiService } from '../../../movie-api.service';

/** This import is used to display notifications back to the user*/
import { MatSnackBar } from '@angular/material/snack-bar';
import { MATERIAL_IMPORTS } from '../../material.imports';

/**directive in angular*/
@Component({
  selector: 'app-user-registration',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit {

  /**input into the component, from the parent, similar to React Props*/
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**immediately called when component is created*/
  /**In angular -> to inject dependencies*/
  constructor(
    public movieApiService: MovieApiService,
    public dialogRef: MatDialogRef<UserRegistrationComponent>,
    public snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    /**called after component data is bound*/
  }

  /** This is the function responsible for sending the form inputs to the backend*/
  registerUser(): void {
    this.movieApiService.userRegistration(this.userData).subscribe((result) => {
      /** Logic for a successful user registration goes here! (To be implemented)*/
      this.dialogRef.close(); /** This will close the modal on success!*/
      this.snackBar.open(result, 'OK', { duration: 2000 });
    }, (result) => {
      this.snackBar.open(result, 'OK', { duration: 2000});
    });
  }

}
