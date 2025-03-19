import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieApiService } from '../../../movie-api.service';
import { MATERIAL_IMPORTS } from '../../material.imports';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [MATERIAL_IMPORTS],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit {

  /**input into the component, from the parent, similar to React Props*/
  @Input() userData = { Username: '', Password: '' };

  /**immediately called when component is created*/
  /**In angular -> to inject dependencies*/
  constructor(
    public movieApiService: MovieApiService,
    public dialogRef: MatDialogRef<LoginComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ){}

  ngOnInit(): void {
    /**called after component data is bound*/
  }

  /**This is the function responsible for sending the form inputs to the backend*/
  loginUser(): void {
    this.movieApiService.userLogin(this.userData).subscribe((result) => {
      /**store token in localstorage*/
      localStorage.setItem('user', JSON.stringify(result.user))
      localStorage.setItem('token', JSON.stringify(result.token))
      this.dialogRef.close(); // This will close the modal on success!
      this.snackBar.open('User Signed in successfully', 'OK', { duration: 2000 });
      this.router.navigate(['/movies'])
    }, (result) => {
      this.snackBar.open(result, 'OK', { duration: 2000});
    });
  }

}
